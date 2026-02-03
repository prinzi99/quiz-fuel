import { useState, useCallback } from 'react';
import {
  quizQuestions,
  profiles,
  calculateResult,
  type QuizScores,
  type ProfileType,
  type ProfileResult,
} from '@/lib/quizData';

export type QuizState = 'start' | 'questions' | 'result' | 'email' | 'complete';

interface UseQuizReturn {
  state: QuizState;
  currentQuestionIndex: number;
  totalQuestions: number;
  currentQuestion: typeof quizQuestions[0] | null;
  scores: QuizScores;
  result: ProfileResult | null;
  email: string;
  setEmail: (email: string) => void;
  startQuiz: () => void;
  answerQuestion: (profile: ProfileType) => void;
  submitEmail: () => void;
  resetQuiz: () => void;
  progress: number;
}

export const useQuiz = (): UseQuizReturn => {
  const [state, setState] = useState<QuizState>('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState<QuizScores>({ A: 0, B: 0, C: 0 });
  const [result, setResult] = useState<ProfileResult | null>(null);
  const [email, setEmail] = useState('');

  const totalQuestions = quizQuestions.length;
  const currentQuestion = state === 'questions' ? quizQuestions[currentQuestionIndex] : null;
  const progress = state === 'questions' 
    ? ((currentQuestionIndex) / totalQuestions) * 100 
    : state === 'start' ? 0 : 100;

  const startQuiz = useCallback(() => {
    setState('questions');
    setCurrentQuestionIndex(0);
    setScores({ A: 0, B: 0, C: 0 });
    setResult(null);
    setEmail('');
  }, []);

  const answerQuestion = useCallback((profile: ProfileType) => {
    // Update scores
    setScores((prev) => ({
      ...prev,
      [profile]: prev[profile] + 1,
    }));

    // Check if this was the last question
    if (currentQuestionIndex >= totalQuestions - 1) {
      // Calculate result with updated scores
      const updatedScores = {
        ...scores,
        [profile]: scores[profile] + 1,
      };
      const resultProfile = calculateResult(updatedScores);
      setResult(profiles[resultProfile]);
      setState('result');
    } else {
      // Move to next question
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  }, [currentQuestionIndex, totalQuestions, scores]);

  const submitEmail = useCallback(() => {
    if (email && email.includes('@')) {
      setState('complete');
      // Here you would typically send the email to your backend
      console.log('Email submitted:', email, 'Result:', result?.id);
    }
  }, [email, result]);

  const resetQuiz = useCallback(() => {
    setState('start');
    setCurrentQuestionIndex(0);
    setScores({ A: 0, B: 0, C: 0 });
    setResult(null);
    setEmail('');
  }, []);

  return {
    state,
    currentQuestionIndex,
    totalQuestions,
    currentQuestion,
    scores,
    result,
    email,
    setEmail,
    startQuiz,
    answerQuestion,
    submitEmail,
    resetQuiz,
    progress,
  };
};
