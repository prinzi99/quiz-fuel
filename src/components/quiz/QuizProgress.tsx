import { Progress } from '@/components/ui/progress';

interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
  progress: number;
}

const QuizProgress = ({ currentQuestion, totalQuestions, progress }: QuizProgressProps) => {
  return (
    <div className="w-full mb-8">
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm font-medium text-foreground/70">
          Frage {currentQuestion + 1} von {totalQuestions}
        </span>
        <span className="text-sm font-medium text-foreground/70">
          {Math.round(progress)}%
        </span>
      </div>
      <Progress 
        value={progress} 
        className="h-2 bg-muted"
      />
    </div>
  );
};

export default QuizProgress;
