// Extended profile content for result page
// This file contains the full detailed content for each metabolism profile

import type { ProfileType } from './quizData';

export interface ProfileFullContent {
  id: ProfileType;
  // Neutral headline (no profile name revealed)
  headline: string;
  subheadline: string;
  // Short validation (2-3 sentences)
  validation: string;
  // Explanation of the pattern
  explanation: string;
  // Typical signs (bullet points)
  typicalSigns: string[];
  // Common mistakes (bullet points)
  commonMistakes: string[];
  // Outlook (hope without solution)
  outlook: string;
  // CTA text
  ctaText: string;
}

export const profileFullContent: Record<ProfileType, ProfileFullContent> = {
  A: {
    id: 'A',
    headline: 'Was bei Deinem Stoffwechsel aktuell passiert',
    subheadline: 'Und warum Disziplin allein nicht die Lösung ist',
    validation:
      'Deine Antworten zeigen ein klares Muster: Dein Körper reagiert aktuell nicht so, wie Du es Dir wünschst – obwohl Du alles richtig machst. Das ist frustrierend, aber absolut nachvollziehbar.',
    explanation:
      'Dein Körper befindet sich in einem dauerhaften Alarmzustand. Stress, Schlafmangel oder permanenter Druck signalisieren ihm Gefahr – und in diesem Modus wird Fettverbrennung zur Nebensache. Stattdessen hält Dein System an Reserven fest, weil es glaubt, sie zu brauchen. Das ist keine Schwäche, sondern ein Schutzmechanismus.',
    typicalSigns: [
      'Dein Gewicht stagniert, obwohl Du Dich diszipliniert ernährst',
      'Du erlebst Heißhunger, besonders in stressigen Phasen',
      'Morgens fühlst Du Dich oft müde und erschlagen',
      'Bauchfett reagiert kaum – egal, was Du versuchst',
    ],
    commonMistakes: [
      'Noch weniger essen, um „endlich Ergebnisse" zu sehen',
      'Noch striktere Keto- oder Low-Carb-Phasen einlegen',
      'Mahlzeiten auslassen, um Kalorien zu sparen',
      'Mehr Training statt mehr Erholung einbauen',
    ],
    outlook:
      'Dein Körper braucht Beruhigung und Struktur, nicht mehr Härte. Wenn er versteht, dass keine Gefahr besteht, kann er wieder loslassen.',
    ctaText: 'Kostenlose Auswertung als PDF herunterladen',
  },
  B: {
    id: 'B',
    headline: 'Warum Dein Körper gerade blockiert',
    subheadline: 'Und was das mit Deiner Energie zu tun hat',
    validation:
      'Deine Antworten zeigen ein Muster, das häufiger vorkommt als man denkt: Dein Körper bekommt nicht das, was er braucht – auch wenn Du glaubst, alles richtig zu machen.',
    explanation:
      'Deinem Körper fehlt Energie oder Versorgung, um Fett effizient zu verbrennen. Das klingt paradox, ist aber ein häufiges Phänomen: Wer dauerhaft zu wenig oder das Falsche isst, signalisiert dem Körper Mangel. Aus Selbstschutz wird dann gespart – an Energie, an Stoffwechsel, an Fettverbrennung.',
    typicalSigns: [
      'Du bist oft stark erschöpft, auch ohne körperliche Anstrengung',
      'Du frierst schneller als andere',
      'Konzentration fällt Dir schwer',
      'Trotz wenig Essen passiert nichts auf der Waage',
    ],
    commonMistakes: [
      'Noch weiter reduzieren, weil „es ja nicht reicht"',
      'Fett vermeiden, obwohl es essentiell wäre',
      'Clean Eating ohne ausreichende Energiezufuhr',
      'Zu wenig Protein, um Muskeln und Stoffwechsel zu unterstützen',
    ],
    outlook:
      'Fettverbrennung braucht Sicherheit und ausreichende Versorgung. Dein Körper muss wissen, dass er nicht hungern muss – dann kann er auch wieder Reserven freigeben.',
    ctaText: 'Kostenlose Auswertung als PDF herunterladen',
  },
  C: {
    id: 'C',
    headline: 'Warum klassische Diäten bei Dir nicht mehr funktionieren',
    subheadline: 'Und was Dein Stoffwechsel wirklich braucht',
    validation:
      'Deine Antworten zeigen ein Muster, das viele kennen, die schon mehrere Diäten hinter sich haben: Der Körper reagiert einfach nicht mehr. Das liegt nicht an Dir.',
    explanation:
      'Dein Stoffwechsel hat gelernt, mit immer weniger Energie auszukommen. Das ist eine biologische Anpassung an wiederholte Diätphasen. Fettreserven werden jetzt besonders geschützt, weil Dein Körper „gelernt" hat, dass immer wieder Mangel kommt.',
    typicalSigns: [
      'Abnehmen ist extrem schwierig geworden',
      'Nach jeder Diät nimmst Du schneller wieder zu',
      'Du hast kaum noch Spielraum bei der Ernährung',
      'Frust trotz Kontrolle und Disziplin',
    ],
    commonMistakes: [
      'Eine neue Diät starten, die wieder mit Verzicht beginnt',
      'Erneutes Kaloriendefizit, weil „es ja funktioniert hat"',
      'Keto als Dauerlösung, obwohl der Körper dagegen arbeitet',
      'Angst vor jeder Erhöhung der Nahrungsmenge',
    ],
    outlook:
      'Hier braucht es Strategie und Individualisierung, keinen neuen Verzicht. Dein Stoffwechsel kann sich erholen – wenn man weiß, wie.',
    ctaText: 'Kostenlose Auswertung als PDF herunterladen',
  },
};
