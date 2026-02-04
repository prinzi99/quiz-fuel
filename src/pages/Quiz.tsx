import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/landing/Footer';
import QuizProgress from '@/components/quiz/QuizProgress';
import QuizQuestion from '@/components/quiz/QuizQuestion';
import QuizResult from '@/components/quiz/QuizResult';
import { trackQuizStartConversion } from '@/lib/gtm';
import {
  quizQuestions,
  profiles,
  calculateResult,
  type QuizScores,
  type ProfileType,
  type ProfileResult,
} from '@/lib/quizData';

type QuizStep = 'intro' | 'questions' | 'result' | 'complete';

const Quiz = () => {
  const navigate = useNavigate();
  
  const [step, setStep] = useState<QuizStep>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState<QuizScores>({ A: 0, B: 0, C: 0 });
  const [result, setResult] = useState<ProfileResult | null>(null);
  const [email, setEmail] = useState('');

  const totalQuestions = quizQuestions.length;
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const progress = step === 'questions' 
    ? ((currentQuestionIndex) / totalQuestions) * 100 
    : step === 'intro' ? 0 : 100;

  const handleStartQuiz = () => {
    // Track Google Ads conversion
    trackQuizStartConversion();
    
    setStep('questions');
    setCurrentQuestionIndex(0);
    setScores({ A: 0, B: 0, C: 0 });
    setResult(null);
    setEmail('');
  };

  const handleAnswerQuestion = useCallback((profile: ProfileType) => {
    // Update scores
    const newScores = {
      ...scores,
      [profile]: scores[profile] + 1,
    };
    setScores(newScores);

    // Check if this was the last question
    if (currentQuestionIndex >= totalQuestions - 1) {
      const resultProfile = calculateResult(newScores);
      setResult(profiles[resultProfile]);
      setStep('result');
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  }, [currentQuestionIndex, totalQuestions, scores]);

  const handleSubmitEmail = useCallback(() => {
    if (email && email.includes('@')) {
      setStep('complete');
      console.log('Email submitted:', email, 'Result:', result?.id);
    }
  }, [email, result]);

  const handleReset = () => {
    setStep('intro');
    setCurrentQuestionIndex(0);
    setScores({ A: 0, B: 0, C: 0 });
    setResult(null);
    setEmail('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Stoffwechsel-Quiz | Philipp's Biohack</title>
        <meta name="description" content="Finde heraus, was Deinen Stoffwechsel blockiert. Das kostenlose Quiz zeigt Dir in 2 Minuten, warum Keto bei Dir nicht funktioniert." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Header />

      <main className="flex-grow py-8 md:py-12">
        <div className="container max-w-2xl mx-auto px-4">
          
          {/* Step 1: Intro */}
          {step === 'intro' && (
            <div className="bg-card border border-border rounded-2xl shadow-lg p-6 md:p-10 animate-fade-in-up">
              <div className="space-y-6">
                <h1 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                  Was blockiert Deine <span className="text-primary">Fettverbrennung</span> wirklich?
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Beantworte 6 kurze Fragen und erhalte eine individuelle 
                  Einschätzung Deines Stoffwechsels – in nur 2 Minuten.
                </p>

                <div className="text-sm text-muted-foreground border-l-2 border-primary/30 pl-4 bg-muted/50 py-3 pr-4 rounded-r-lg">
                  Keine richtigen oder falschen Antworten. Die Analyse basiert auf 
                  typischen Mustern und hilft Dir, Deinen Stoffwechsel-Typ zu erkennen.
                </div>

                <Button
                  onClick={handleStartQuiz}
                  variant="cta"
                  size="xl"
                  className="w-full mt-4"
                >
                  Analyse starten
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Kostenlos & unverbindlich
                </p>
              </div>
            </div>
          )}

          {/* Step 2: Questions */}
          {step === 'questions' && currentQuestion && (
            <div className="bg-card border border-border rounded-2xl shadow-lg p-6 md:p-10">
              {/* Progress */}
              <div className="mb-8">
                <QuizProgress
                  currentQuestion={currentQuestionIndex}
                  totalQuestions={totalQuestions}
                  progress={progress}
                />
              </div>

              {/* Question counter */}
              <div className="text-sm text-muted-foreground mb-4">
                Frage {currentQuestionIndex + 1} von {totalQuestions}
              </div>

              {/* Current question */}
              <QuizQuestion
                key={currentQuestion.id}
                question={currentQuestion}
                onAnswer={handleAnswerQuestion}
              />
            </div>
          )}

          {/* Step 3 & 4: Result */}
          {(step === 'result' || step === 'complete') && result && (
            <div className="bg-card border border-border rounded-2xl shadow-lg p-6 md:p-10">
              <QuizResult
                result={result}
                showFullResult={step === 'complete'}
                email={email}
                onEmailChange={setEmail}
                onSubmitEmail={handleSubmitEmail}
                onReset={handleReset}
              />
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Quiz;
