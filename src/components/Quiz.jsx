import { useState } from 'react';

export default function Quiz({ questions }) {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionIndex, answer) => {
    setAnswers({ ...answers, [questionIndex]: answer });
  };

  const checkAnswers = () => {
    setShowResults(true);
  };

  const resetQuiz = () => {
    setAnswers({});
    setShowResults(false);
  };

  const score = questions.reduce((acc, q, idx) => {
    return acc + (answers[idx] === q.correct ? 1 : 0);
  }, 0);

  return (
    <div className="quiz">
      <h3>📋 Trắc nghiệm ôn tập</h3>
      {questions.map((q, idx) => (
        <div key={idx} className="quiz-question">
          <p><strong>Câu {idx + 1}:</strong> {q.question}</p>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            {q.options.map((opt, optIdx) => (
              <li key={optIdx} style={{ margin: '0.5rem 0' }}>
                <label style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                  <input
                    type="radio"
                    name={`question-${idx}`}
                    value={opt}
                    checked={answers[idx] === opt}
                    onChange={() => handleAnswer(idx, opt)}
                    disabled={showResults}
                    style={{ marginRight: '0.5rem' }}
                  />
                  <span style={{
                    color: showResults
                      ? opt === q.correct
                        ? 'green'
                        : answers[idx] === opt
                        ? 'red'
                        : 'inherit'
                      : 'inherit',
                    fontWeight: showResults && opt === q.correct ? 'bold' : 'normal'
                  }}>
                    {opt}
                    {showResults && opt === q.correct && ' ✓'}
                    {showResults && answers[idx] === opt && opt !== q.correct && ' ✗'}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
        {!showResults ? (
          <button
            onClick={checkAnswers}
            style={{
              background: '#667eea',
              color: 'white',
              border: 'none',
              padding: '0.8rem 2rem',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '600'
            }}
          >
            Kiểm tra đáp án
          </button>
        ) : (
          <>
            <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#667eea' }}>
              Điểm của bạn: {score}/{questions.length}
            </p>
            <button
              onClick={resetQuiz}
              style={{
                background: '#764ba2',
                color: 'white',
                border: 'none',
                padding: '0.8rem 2rem',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '600',
                marginTop: '1rem'
              }}
            >
              Làm lại
            </button>
          </>
        )}
      </div>
    </div>
  );
}
