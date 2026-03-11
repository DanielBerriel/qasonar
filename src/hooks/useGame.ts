import { useState } from 'react';
import type { Session, Question } from '../data/questions';

export type GameScreen = 'sonar' | 'question' | 'results';

export interface AnsweredQuestion {
  question: Question;
  selectedIndex: number;
  isCorrect: boolean;
}

export function useGame() {
  const [screen, setScreen] = useState<GameScreen>('sonar');
  const [currentSession, setCurrentSession] = useState<Session | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<AnsweredQuestion[]>([]);

  const startSession = (session: Session) => {
    setCurrentSession(session);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setScreen('question');
  };

  const answerQuestion = (selectedIndex: number) => {
    if (!currentSession) return;

    const question = currentSession.questions[currentQuestionIndex];
    const isCorrect = selectedIndex === question.correctIndex;

    setAnswers(prev => [...prev, { question, selectedIndex, isCorrect }]);

    return isCorrect;
  };

  const nextQuestion = () => {
    if (!currentSession) return;

    if (currentQuestionIndex + 1 >= currentSession.questions.length) {
      setScreen('results');
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const backToSonar = () => {
    setScreen('sonar');
    setCurrentSession(null);
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };

  const getCurrentQuestion = (): Question | null => {
    if (!currentSession) return null;
    return currentSession.questions[currentQuestionIndex] || null;
  };

  const getScore = () => {
    return answers.filter(a => a.isCorrect).length;
  };

  const getWrongAnswers = () => {
    return answers.filter(a => !a.isCorrect);
  };

  return {
    screen,
    currentSession,
    currentQuestionIndex,
    answers,
    startSession,
    answerQuestion,
    nextQuestion,
    backToSonar,
    getCurrentQuestion,
    getScore,
    getWrongAnswers,
  };
}
