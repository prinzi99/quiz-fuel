import { useState } from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle2 } from 'lucide-react';
import type { QuizQuestion as QuizQuestionType, ProfileType } from '@/lib/quizData';

interface QuizQuestionProps {
  question: QuizQuestionType;
  onAnswer: (profile: ProfileType) => void;
}

const QuizQuestion = ({ question, onAnswer }: QuizQuestionProps) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSelect = (answerId: string, profile: ProfileType) => {
    if (isTransitioning) return;
    
    setSelectedId(answerId);
    setIsTransitioning(true);

    // Brief delay for visual feedback before transitioning
    setTimeout(() => {
      onAnswer(profile);
      setSelectedId(null);
      setIsTransitioning(false);
    }, 400);
  };

  return (
    <div className="animate-fade-in-up">
      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-8 leading-relaxed">
        {question.question}
      </h3>

      <div className="space-y-3">
        {question.answers.map((answer) => (
          <button
            key={answer.id}
            onClick={() => handleSelect(answer.id, answer.profile)}
            disabled={isTransitioning}
            className={cn(
              'w-full text-left p-5 rounded-xl border-2 transition-all duration-200',
              'hover:border-secondary hover:bg-secondary/10 hover:shadow-md',
              'focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2',
              'disabled:cursor-not-allowed',
              selectedId === answer.id
                ? 'border-secondary bg-secondary text-secondary-foreground scale-[0.98] shadow-lg'
                : 'border-border bg-card shadow-sm hover:border-primary/30'
            )}
          >
            <div className="flex items-center gap-4">
              <div className={cn(
                "w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all",
                selectedId === answer.id 
                  ? "border-secondary-foreground bg-secondary-foreground/20" 
                  : "border-muted-foreground/30"
              )}>
                {selectedId === answer.id && (
                  <CheckCircle2 className="w-5 h-5 text-secondary-foreground" />
                )}
              </div>
              <span className={cn(
                "text-base md:text-lg leading-relaxed font-medium",
                selectedId === answer.id ? "text-secondary-foreground" : "text-foreground"
              )}>
                {answer.text}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
