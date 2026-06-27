import React, { useMemo } from 'react';
import topicData from '../data/topics';
import './TopicList.css';

export default function TopicList({ onNodeClick, completedNodes, searchQuery }) {
  
  const renderList = useMemo(() => {
    const query = (searchQuery || '').toLowerCase();
    
    return topicData.children.map(grade => {
      // Filter chapters based on search query
      const filteredChapters = grade.children.map(chapter => {
        const filteredLessons = chapter.children.filter(lesson => 
          lesson.name.toLowerCase().includes(query) || 
          (lesson.description && lesson.description.toLowerCase().includes(query)) ||
          chapter.name.toLowerCase().includes(query)
        );
        return { ...chapter, children: filteredLessons };
      }).filter(chapter => chapter.children.length > 0);

      if (filteredChapters.length === 0) return null;

      return (
        <div key={grade.id} className={`grade-section grade-${grade.id}`}>
          <h2 className="grade-title">{grade.name}</h2>
          <div className="chapter-grid">
            {filteredChapters.map(chapter => (
              <div key={chapter.id} className="chapter-card">
                <h3 className="chapter-title">{chapter.name}</h3>
                {chapter.description && <p className="chapter-desc">{chapter.description}</p>}
                <ul className="lesson-list">
                  {chapter.children.map(lesson => {
                    const isCompleted = completedNodes.includes(lesson.id);
                    return (
                      <li 
                        key={lesson.id} 
                        className={`lesson-item ${isCompleted ? 'completed' : ''}`}
                        onClick={() => onNodeClick(lesson)}
                      >
                        <span className="lesson-icon">
                          {isCompleted ? '✅' : '📄'}
                        </span>
                        <div className="lesson-content">
                          <span className="lesson-name">{lesson.name}</span>
                        </div>
                        <span className="lesson-arrow">→</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      );
    });
  }, [completedNodes, onNodeClick, searchQuery]);

  return (
    <div className="topic-list-container">
      <div className="topic-list-content">
        {renderList}
      </div>
    </div>
  );
}
