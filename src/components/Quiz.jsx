import { useState, useEffect, useMemo } from 'react';
import katex from 'katex';

const MathText = ({ text }) => {
  if (!text) return null;
  const parts = text.split('$');
  return (
    <>
      {parts.map((part, index) => {
        if (index % 2 === 1) {
          try {
            const html = katex.renderToString(part, { throwOnError: false });
            return <span key={index} dangerouslySetInnerHTML={{ __html: html }} />;
          } catch (e) {
            return <span key={index} className="text-red-500">{part}</span>;
          }
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
};

const shuffleArray = (array) => {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

export default function Quiz({ questions }) {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [mounted, setMounted] = useState(false);

  const questionsHash = JSON.stringify(questions || []);

  useEffect(() => {
    setMounted(true);
    resetQuiz();
  }, [questionsHash]);

  const resetQuiz = () => {
    const arr = questions || [];
    let processed = arr.map((q, originalIdx) => {
      let opts = [];
      if (q.type === 'mcq' || q.type === 'msq' || q.option_a) {
        opts = [
          { key: 'A', text: q.option_a },
          { key: 'B', text: q.option_b },
          { key: 'C', text: q.option_c },
          { key: 'D', text: q.option_d }
        ].filter(o => o?.text);
      } else if (q.options) {
        opts = q.options.map((text, i) => ({
          key: String.fromCharCode(65 + i), text
        }));
      }

      opts = shuffleArray(opts);

      let correctKey = q.correct_option;
      if (!correctKey && q.correct) {
         const found = opts.find(o => o.text === q.correct);
         if (found) correctKey = found.key;
      }

      return {
        ...q,
        type: q.type || 'mcq',
        originalIdx,
        displayOptions: opts,
        correctKey: correctKey || ''
      };
    });

    setShuffledQuestions(shuffleArray(processed));
    setAnswers({});
    setShowResults(false);
  };

  const handleAnswer = (questionId, answerValue, type) => {
    if (showResults) return;
    
    if (type === 'msq') {
       const current = answers[questionId] || [];
       if (current.includes(answerValue)) {
          setAnswers({ ...answers, [questionId]: current.filter(v => v !== answerValue) });
       } else {
          setAnswers({ ...answers, [questionId]: [...current, answerValue] });
       }
    } else {
       setAnswers({ ...answers, [questionId]: answerValue });
    }
  };

  const checkAnswers = () => {
    setShowResults(true);
  };

  const score = useMemo(() => {
    return shuffledQuestions.reduce((acc, q) => {
      if (q.type === 'sa' || q.type === 'tl') {
          const textAns = (answers[q.originalIdx] || '').trim().toLowerCase();
          const correctAns = (q.correctKey || '').trim().toLowerCase();
          return acc + (textAns === correctAns ? 1 : 0);
      }
      
      if (q.type === 'msq') {
          const selected = answers[q.originalIdx] || [];
          const correctArr = q.correctKey.split(',').map(s => s.trim()).sort();
          const selectedArr = [...selected].sort();
          const isMatch = correctArr.length > 0 && correctArr.length === selectedArr.length && correctArr.every((v, i) => v === selectedArr[i]);
          return acc + (isMatch ? 1 : 0);
      }
      
      return acc + (answers[q.originalIdx] === q.correctKey ? 1 : 0);
    }, 0);
  }, [answers, shuffledQuestions]);

  const labels = ['A', 'B', 'C', 'D', 'E', 'F'];

  // Prevent hydration mismatch by returning nothing until mounted
  if (!mounted || shuffledQuestions.length === 0) {
    return <div className="animate-pulse bg-slate-100 rounded-3xl h-64 w-full my-8"></div>;
  }

  return (
    <div className="my-8">
      <div className="space-y-8">
        {shuffledQuestions.map((q, displayIdx) => {
           let type = q.type;
           
           return (
            <div key={`q-${q.originalIdx}-${displayIdx}`} className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 relative overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
              <div className="absolute left-0 top-8 bottom-8 w-1.5 bg-[#3b82f6] rounded-r-full"></div>
              
              <div className="pl-4">
                <div className="text-[1.1rem] text-slate-800 mb-6 font-medium flex gap-2">
                  <span className="font-bold text-[#2563eb] whitespace-nowrap">Câu {displayIdx + 1}:</span> 
                  <span><MathText text={q.question} /></span>
                </div>
                
                {(type === 'mcq' || type === 'msq') && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {q.displayOptions.map((opt, optDisplayIdx) => {
                      const ansObj = answers[q.originalIdx];
                      const isSelected = type === 'msq' ? (ansObj || []).includes(opt.key) : ansObj === opt.key;
                      
                      const correctArr = type === 'msq' ? q.correctKey.split(',').map(s=>s.trim()) : [q.correctKey];
                      const isCorrect = correctArr.includes(opt.key);
                      
                      let optionBg = "bg-[#f4f7ff] border-[#dbeafe]";
                      let markerBg = "bg-[#4f46e5] text-white";
                      let textColor = "text-slate-800";
                      
                      if (showResults) {
                        if (isCorrect) {
                           optionBg = "bg-green-50 border-green-300";
                           markerBg = "bg-green-600 text-white";
                           textColor = "text-green-800 font-medium";
                        } else if (isSelected && !isCorrect) {
                           optionBg = "bg-red-50 border-red-300";
                           markerBg = "bg-red-500 text-white";
                           textColor = "text-red-700";
                        } else {
                           optionBg = "bg-slate-50 border-slate-200 opacity-60";
                           markerBg = "bg-slate-400 text-white";
                           textColor = "text-slate-500";
                        }
                      } else if (isSelected) {
                         optionBg = "bg-[#e0e7ff] border-[#818cf8] shadow-sm";
                         markerBg = "bg-[#4338ca] text-white";
                      }

                      return (
                        <label 
                          key={opt.key} 
                          className={`
                            flex items-center p-3 rounded-2xl border-2 cursor-pointer transition-all duration-200
                            hover:bg-[#e0e7ff] hover:border-[#818cf8]
                            ${optionBg}
                          `}
                        >
                          <input
                            type={type === 'msq' ? 'checkbox' : 'radio'}
                            name={`question-${q.originalIdx}`}
                            value={opt.key}
                            checked={isSelected}
                            onChange={() => handleAnswer(q.originalIdx, opt.key, type)}
                            disabled={showResults}
                            className="hidden"
                          />
                          <div className={`w-[2.25rem] h-[2.25rem] rounded-[10px] flex items-center justify-center font-bold text-[1rem] shrink-0 mr-4 shadow-sm ${markerBg}`}>
                            {labels[optDisplayIdx]}
                          </div>
                          <div className={`text-[1.05rem] font-medium w-full overflow-x-auto overflow-y-hidden ${textColor}`}>
                            <MathText text={opt.text} />
                          </div>
                          
                          {showResults && isCorrect && (
                            <div className="ml-auto pl-2 text-green-600 shrink-0">
                              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                            </div>
                          )}
                          {showResults && isSelected && !isCorrect && (
                            <div className="ml-auto pl-2 text-red-500 shrink-0">
                              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" /></svg>
                            </div>
                          )}
                        </label>
                      );
                    })}
                  </div>
                )}

                {(type === 'sa' || type === 'tl') && (
                   <div className="mt-4">
                     {type === 'sa' ? (
                       <input 
                         type="text" 
                         className="w-full md:w-1/2 p-3 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:outline-none"
                         placeholder="Nhập câu trả lời ngắn của bạn ở đây..."
                         value={answers[q.originalIdx] || ''}
                         onChange={(e) => handleAnswer(q.originalIdx, e.target.value, type)}
                         disabled={showResults}
                       />
                     ) : (
                       <textarea 
                         rows="4"
                         className="w-full p-4 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:outline-none"
                         placeholder="Trình bày bài làm tự luận..."
                         value={answers[q.originalIdx] || ''}
                         onChange={(e) => handleAnswer(q.originalIdx, e.target.value, type)}
                         disabled={showResults}
                       ></textarea>
                     )}
                     
                     {showResults && (
                        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl">
                           <p className="font-bold text-green-800">Đáp án chính xác:</p>
                           <p className="text-green-700"><MathText text={q.correctKey} /></p>
                        </div>
                     )}
                   </div>
                )}

                {showResults && q.explanation && (
                  <div className="mt-6 pt-6 border-t border-dashed border-slate-200">
                    <p className="font-bold text-blue-800 flex items-center gap-2 mb-2">
                       <span>💡</span> Giải thích:
                    </p>
                    <div className="text-slate-600 leading-relaxed whitespace-pre-wrap">
                      <MathText text={q.explanation} />
                    </div>
                  </div>
                )}
              </div>
            </div>
           );
        })}
      </div>
      
      <div className="mt-10 flex justify-center">
        {!showResults ? (
          <button
            onClick={checkAnswers}
            disabled={Object.keys(answers).length === 0}
            className="px-10 py-3.5 bg-gradient-to-r from-[#4f46e5] to-[#3b82f6] hover:from-[#4338ca] hover:to-[#2563eb] text-white rounded-xl font-bold text-lg shadow-[0_8px_20px_rgba(59,130,246,0.3)] transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5"
          >
            Nộp bài & Kiểm tra
          </button>
        ) : (
          <div className="text-center w-full max-w-md bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-[#e0e7ff]">
            <h4 className="text-2xl font-bold text-slate-800 mb-2">Kết quả của bạn</h4>
            <div className="text-5xl font-extrabold text-[#4f46e5] mb-8">
              {score} <span className="text-2xl text-slate-400">/ {shuffledQuestions.length}</span>
            </div>
            <button
              onClick={resetQuiz}
              className="px-10 py-3.5 bg-slate-800 hover:bg-slate-900 text-white rounded-xl font-bold text-lg shadow-md transition-colors w-full"
            >
              Làm lại bài tập
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
