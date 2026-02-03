import { useQuiz } from '@/hooks/useQuiz';
import QuizStart from './QuizStart';
import QuizProgress from './QuizProgress';
import QuizQuestion from './QuizQuestion';
import QuizResult from './QuizResult';

const QuizContainer = () => {
  const {
    state,
    currentQuestionIndex,
    totalQuestions,
    currentQuestion,
    result,
    email,
    setEmail,
    startQuiz,
    answerQuestion,
    submitEmail,
    resetQuiz,
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

      {(state === 'result' || state === 'complete') && result && (
        <QuizResult
          result={result}
          showFullResult={state === 'complete'}
          email={email}
          onEmailChange={setEmail}
          onSubmitEmail={submitEmail}
          onReset={resetQuiz}
        />
      )}
    </div>
  );
};

export default QuizContainer;
