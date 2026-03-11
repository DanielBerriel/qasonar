import { useState, useEffect } from 'react';
import type { Question } from '../data/questions';
import './QuestionScreen.css';

interface QuestionScreenProps {
  sessionTitle: string;
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (index: number) => void;
}

export function QuestionScreen({ 
  sessionTitle, 
  question, 
  questionNumber, 
  totalQuestions, 
  onAnswer 
}: QuestionScreenProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    setSelectedIndex(null);
    setShowFeedback(false);
  }, [question.id]);

  const handleSelect = (index: number) => {
    if (showFeedback) return;
    
    setSelectedIndex(index);
    const correct = index === question.correctIndex;
    setIsCorrect(correct);
    setShowFeedback(true);
    
    setTimeout(() => {
      onAnswer(index);
    }, 1500);
  };

  const getOptionClass = (index: number) => {
    if (!showFeedback) {
      return selectedIndex === index ? 'selected' : '';
    }
    if (index === question.correctIndex) {
      return 'correct';
    }
    if (index === selectedIndex && !isCorrect) {
      return 'wrong';
    }
    return '';
  };

  return (
    <div className="question-overlay">
      <div className="question-card">
        <div className="question-header">
          <span className="session-title">{sessionTitle}</span>
          <span className="question-progress">{questionNumber}/{totalQuestions}</span>
        </div>
        
        <h2 className="question-text">{question.question}</h2>
        
        <div className="options-list">
          {question.options.map((option, index) => (
            <button
              key={index}
              className={`option-button ${getOptionClass(index)}`}
              onClick={() => handleSelect(index)}
              disabled={showFeedback}
            >
              <span className="option-letter">
                {String.fromCharCode(65 + index)}
              </span>
              <span className="option-text">{option}</span>
            </button>
          ))}
        </div>

        {showFeedback && (
          <div className={`feedback ${isCorrect ? 'correct' : 'wrong'}`}>
            {isCorrect ? '✓ Correto!' : `✗ Incorreto. A resposta correta: ${question.options[question.correctIndex]}`}
          </div>
        )}
      </div>
    </div>
  );
}
