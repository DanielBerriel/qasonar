import type { AnsweredQuestion } from '../hooks/useGame';
import './ResultsScreen.css';

interface ResultsScreenProps {
  sessionTitle: string;
  score: number;
  totalQuestions: number;
  wrongAnswers: AnsweredQuestion[];
  onBackToSonar: () => void;
}

export function ResultsScreen({ 
  sessionTitle, 
  score, 
  totalQuestions, 
  wrongAnswers,
  onBackToSonar 
}: ResultsScreenProps) {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getGrade = () => {
    if (percentage >= 80) return { text: 'Excelente!', color: '#00ff00' };
    if (percentage >= 60) return { text: 'Bom trabalho!', color: '#88ff00' };
    if (percentage >= 40) return { text: 'Pode melhorar!', color: '#ffff00' };
    return { text: 'Estude mais!', color: '#ff8800' };
  };

  const grade = getGrade();

  return (
    <div className="results-overlay">
      <div className="results-card">
        <h2 className="results-title">{sessionTitle}</h2>
        
        <div className="score-display">
          <span className="score-number" style={{ color: grade.color }}>
            {score}
          </span>
          <span className="score-separator">/</span>
          <span className="score-total">{totalQuestions}</span>
        </div>
        
        <p className="grade-text" style={{ color: grade.color }}>
          {grade.text}
        </p>

        {wrongAnswers.length > 0 ? (
          <div className="wrong-answers-section">
            <h3 className="section-title">Questões Erradas:</h3>
            <div className="wrong-list">
              {wrongAnswers.map((item, index) => (
                <div key={index} className="wrong-item">
                  <p className="wrong-question">
                    <strong>P:</strong> {item.question.question}
                  </p>
                  <p className="wrong-answer">
                    <span className="label">Sua resposta:</span> 
                    <span className="wrong">{item.question.options[item.selectedIndex]}</span>
                  </p>
                  <p className="correct-answer">
                    <span className="label">Correta:</span> 
                    <span className="correct">{item.question.options[item.question.correctIndex]}</span>
                  </p>
                  {item.question.explanation && (
                    <p className="explanation">
                      <span className="label">Explicação:</span> {item.question.explanation}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="all-correct">Parabéns! Você acertou todas!</p>
        )}

        <button className="back-button" onClick={onBackToSonar}>
          Voltar ao Sonar
        </button>
      </div>
    </div>
  );
}
