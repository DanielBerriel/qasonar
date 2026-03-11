import { useGame } from './hooks/useGame';
import { SonarMenu } from './components/SonarMenu';
import { QuestionScreen } from './components/QuestionScreen';
import { ResultsScreen } from './components/ResultsScreen';
import './App.css';

function App() {
  const {
    screen,
    currentSession,
    currentQuestionIndex,
    startSession,
    answerQuestion,
    nextQuestion,
    backToSonar,
    getCurrentQuestion,
    getScore,
    getWrongAnswers,
  } = useGame();

  const currentQuestion = getCurrentQuestion();

  return (
    <div className="app">
      <SonarMenu onSelectSession={startSession} isActive={screen === 'sonar'} />

      {screen === 'question' && currentSession && currentQuestion && (
        <QuestionScreen
          sessionTitle={currentSession.title}
          question={currentQuestion}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={currentSession.questions.length}
          onAnswer={(index) => {
            answerQuestion(index);
            nextQuestion();
          }}
        />
      )}

      {screen === 'results' && currentSession && (
        <ResultsScreen
          sessionTitle={currentSession.title}
          score={getScore()}
          totalQuestions={currentSession.questions.length}
          wrongAnswers={getWrongAnswers()}
          onBackToSonar={backToSonar}
        />
      )}
    </div>
  );
}

export default App;
