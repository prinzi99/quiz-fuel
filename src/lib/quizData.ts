// Stoffwechsel-Quiz Data with Scoring Logic

export type ProfileType = 'A' | 'B' | 'C';

export interface QuizAnswer {
  id: string;
  text: string;
  profile: ProfileType;
}

export interface QuizQuestion {
  id: number;
  question: string;
  answers: QuizAnswer[];
}

export interface ProfileResult {
  id: ProfileType;
  name: string;
  teaser: {
    headline: string;
    description: string;
  };
  fullResult: {
    headline: string;
    description: string;
    keyPoints: string[];
    nextSteps: string;
  };
}

// Profile definitions with teaser and full results
export const profiles: Record<ProfileType, ProfileResult> = {
  A: {
    id: 'A',
    name: 'Der gestresste Stoffwechsel',
    teaser: {
      headline: 'Dein Stoffwechsel steht aktuell unter Stress.',
      description: 'Das erklärt, warum Disziplin und Keto bei Dir nicht greifen.',
    },
    fullResult: {
      headline: 'Der gestresste Stoffwechsel',
      description:
        'Dein Körper befindet sich in einem dauerhaften Stressmodus. Cortisol und andere Stresshormone beeinflussen Deinen Stoffwechsel so stark, dass selbst die beste Ernährung nicht greift. Dein Körper ist auf "Überleben" programmiert – nicht auf Fettverbrennung.',
      keyPoints: [
        'Chronischer Stress blockiert die Fettverbrennung',
        'Schlafqualität und Regeneration sind entscheidend',
        'Standarddiäten verstärken oft den Stresspegel',
        'Dein Körper braucht Signale der Sicherheit',
      ],
      nextSteps:
        'Der erste Schritt ist nicht weniger essen, sondern Deinem Körper zu zeigen, dass er nicht mehr im Überlebensmodus sein muss.',
    },
  },
  B: {
    id: 'B',
    name: 'Der unterversorgte Fettstoffwechsel',
    teaser: {
      headline: 'Dein Körper bekommt nicht das, was er braucht.',
      description: 'Deshalb hält er Energie – und Fett – zurück.',
    },
    fullResult: {
      headline: 'Der unterversorgte Fettstoffwechsel',
      description:
        'Dein Stoffwechsel läuft auf Sparflamme, weil er nicht die richtigen Nährstoffe zur richtigen Zeit bekommt. Trotz vermeintlich gesunder Ernährung fehlen Deinem Körper essentielle Bausteine für einen aktiven Fettstoffwechsel.',
      keyPoints: [
        'Nährstoffmängel bremsen den Stoffwechsel',
        'Zu wenig Energie führt zum Sparmodus',
        'Die richtigen Fette aktivieren den Fettstoffwechsel',
        'Timing und Nährstoffqualität sind entscheidend',
      ],
      nextSteps:
        'Dein Körper braucht keine weitere Einschränkung, sondern die richtigen Signale durch gezielte Nährstoffversorgung.',
    },
  },
  C: {
    id: 'C',
    name: 'Der überangepasste Diät-Stoffwechsel',
    teaser: {
      headline: 'Dein Stoffwechsel hat gelernt zu sparen.',
      description: 'Klassische Diäten verschärfen dieses Problem oft.',
    },
    fullResult: {
      headline: 'Der überangepasste Diät-Stoffwechsel',
      description:
        'Durch viele Diätversuche hat sich Dein Stoffwechsel angepasst und ist extrem effizient geworden. Was früher funktioniert hat, bringt heute keine Ergebnisse mehr. Dein Körper hat gelernt, mit immer weniger auszukommen.',
      keyPoints: [
        'Metabolische Anpassung durch häufige Diäten',
        'Der Grundumsatz ist herunterreguliert',
        'Mehr vom Gleichen führt nicht zum Ziel',
        'Der Stoffwechsel muss wieder "hochgefahren" werden',
      ],
      nextSteps:
        'Das Ziel ist nicht noch weniger zu essen, sondern Deinen Stoffwechsel strategisch wieder zu aktivieren.',
    },
  },
};

// Quiz questions with profile mapping
export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Wie würdest Du Deine bisherigen Abnehm-Erfahrungen beschreiben?',
    answers: [
      {
        id: '1a',
        text: 'Anfangs Erfolg, dann Stillstand oder Rückschritt',
        profile: 'C',
      },
      {
        id: '1b',
        text: 'Kaum Veränderung, egal was ich mache',
        profile: 'A',
      },
      {
        id: '1c',
        text: 'Kurzfristige Abnahme, dann extreme Müdigkeit oder Hunger',
        profile: 'B',
      },
    ],
  },
  {
    id: 2,
    question: 'Wann fühlst Du Dich am häufigsten erschöpft?',
    answers: [
      {
        id: '2a',
        text: 'Morgens nach dem Aufstehen',
        profile: 'A',
      },
      {
        id: '2b',
        text: 'Nach dem Essen',
        profile: 'B',
      },
      {
        id: '2c',
        text: 'Abends oder nach sportlicher Aktivität',
        profile: 'C',
      },
    ],
  },
  {
    id: 3,
    question: 'Was trifft am ehesten auf Dich zu?',
    answers: [
      {
        id: '3a',
        text: 'Heißhunger, vor allem unter Stress',
        profile: 'A',
      },
      {
        id: '3b',
        text: 'Ich esse wenig, bin aber trotzdem oft müde',
        profile: 'B',
      },
      {
        id: '3c',
        text: 'Ich esse kontrolliert, aber mein Gewicht bewegt sich kaum',
        profile: 'C',
      },
    ],
  },
  {
    id: 4,
    question: 'Wie ernährst Du Dich aktuell überwiegend?',
    answers: [
      {
        id: '4a',
        text: 'Sehr „gesund", viele Einschränkungen',
        profile: 'B',
      },
      {
        id: '4b',
        text: 'Low Carb oder Keto, aber ohne klaren Plan',
        profile: 'C',
      },
      {
        id: '4c',
        text: 'Unregelmäßig, oft unter Zeitdruck',
        profile: 'A',
      },
    ],
  },
  {
    id: 5,
    question: 'Wie würdest Du Deinen Schlaf beschreiben?',
    answers: [
      {
        id: '5a',
        text: 'Einschlafen schwer oder häufiges Aufwachen',
        profile: 'A',
      },
      {
        id: '5b',
        text: 'Ich schlafe viel, fühle mich aber nicht erholt',
        profile: 'C',
      },
      {
        id: '5c',
        text: 'Schlaf ist okay, aber ich bin tagsüber trotzdem müde',
        profile: 'B',
      },
    ],
  },
  {
    id: 6,
    question: 'Was empfindest Du aktuell als Dein größtes Problem?',
    answers: [
      {
        id: '6a',
        text: 'Dauerstress, innere Unruhe',
        profile: 'A',
      },
      {
        id: '6b',
        text: 'Energielosigkeit trotz Disziplin',
        profile: 'B',
      },
      {
        id: '6c',
        text: 'Mein Körper reagiert einfach nicht mehr',
        profile: 'C',
      },
    ],
  },
];

// Scoring logic
export interface QuizScores {
  A: number;
  B: number;
  C: number;
}

export const calculateResult = (scores: QuizScores): ProfileType => {
  const { A, B, C } = scores;

  // Find maximum score
  const maxScore = Math.max(A, B, C);

  // Tiebreaker priority: C > A > B
  if (C >= maxScore) return 'C';
  if (A >= maxScore) return 'A';
  return 'B';
};
