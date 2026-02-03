import { useState } from 'react';
import { cn } from '@/lib/utils';
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
    }, 300);
  };

  return (
    <div className="animate-fade-in-up">
      <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-8 leading-relaxed">
        {question.question}
      </h3>

      <div className="space-y-4">
        {question.answers.map((answer) => (
          <button
            key={answer.id}
            onClick={() => handleSelect(answer.id, answer.profile)}
            disabled={isTransitioning}
            className={cn(
              'w-full text-left p-5 rounded-xl border-2 transition-all duration-200',
              'hover:border-primary hover:bg-primary/5',
              'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
              'disabled:cursor-not-allowed',
              selectedId === answer.id
                ? 'border-primary bg-primary/10 scale-[0.98]'
                : 'border-border bg-card'
            )}
          >
            <span className="text-base md:text-lg text-foreground leading-relaxed">
              {answer.text}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
