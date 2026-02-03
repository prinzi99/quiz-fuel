import { useQuiz } from '@/hooks/useQuiz';
import QuizStart from './QuizStart';
import QuizProgress from './QuizProgress';
import QuizQuestion from './QuizQuestion';

const QuizContainer = () => {
  const {
    state,
    currentQuestionIndex,
    totalQuestions,
    currentQuestion,
    startQuiz,
    answerQuestion,
    progress,
  } = useQuiz();

  return (
    <div className="bg-background rounded-2xl border border-border shadow-lg p-6 md:p-10 max-w-2xl mx-auto">
      {state === 'start' && (
        <QuizStart onStart={startQuiz} />
      )}

      {state === 'questions' && currentQuestion && (
        <>
          <QuizProgress
            currentQuestion={currentQuestionIndex}
            totalQuestions={totalQuestions}
            progress={progress}
          />
          <QuizQuestion
            key={currentQuestion.id}
            question={currentQuestion}
            onAnswer={answerQuestion}
          />
        </>
      )}

      {/* Result is now shown on separate page /r7k3pq */}
    </div>
  );
};

export default QuizContainer;
