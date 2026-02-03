import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  quizQuestions,
  profiles,
  calculateResult,
  type QuizScores,
  type ProfileType,
  type ProfileResult,
} from '@/lib/quizData';

export type QuizState = 'start' | 'questions' | 'result' | 'email' | 'complete';

const STORAGE_KEY = 'stoffwechsel-quiz-result';

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
  const navigate = useNavigate();
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
    const updatedScores = {
      ...scores,
      [profile]: scores[profile] + 1,
    };
    setScores(updatedScores);

    // Check if this was the last question
    if (currentQuestionIndex >= totalQuestions - 1) {
      // Calculate result with updated scores
      const resultProfile = calculateResult(updatedScores);
      setResult(profiles[resultProfile]);
      
      // Store result in localStorage and navigate to result page
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        profileId: resultProfile,
        scores: updatedScores,
        unlocked: false,
        timestamp: Date.now(),
      }));
      
      // Navigate to neutral result page
      navigate('/r7k3pq');
    } else {
      // Move to next question
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  }, [currentQuestionIndex, totalQuestions, scores, navigate]);

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
    localStorage.removeItem(STORAGE_KEY);
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
