import { useState } from 'react';
import { User, Mail, ArrowRight } from 'lucide-react';

interface QuentnEmailFormProps {
  onEmailSubmit?: () => void;
  buttonText?: string;
  formId?: string;
}

const QuentnEmailForm = ({ 
  onEmailSubmit, 
  buttonText = "Auswertung & PDF per E-Mail erhalten",
  formId = "REPLACE_WITH_YOUR_FORM_ID" // Replace with your actual Quentn form ID
}: QuentnEmailFormProps) => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting || !email) return;
    setIsSubmitting(true);

    try {
      // Submit to Quentn via fetch
      const formData = new FormData();
      formData.append('first_name', firstName);
      formData.append('mail', email);

      await fetch(`https://REPLACE_WITH_YOUR_SUBDOMAIN.eu-2.quentn-site.com/public/forms/${formId}/raw/submit`, {
        method: 'POST',
        body: formData,
        mode: 'no-cors', // Quentn doesn't support CORS
      });

      console.log('[Quentn] Form submitted successfully');

      // Call the callback after successful submission
      if (onEmailSubmit) {
        onEmailSubmit();
      }
    } catch (error) {
      console.error('[Quentn] Error submitting form:', error);
      // Still proceed even if Quentn fails (fallback behavior)
      if (onEmailSubmit) {
        onEmailSubmit();
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-4">
      <form
        action={`https://REPLACE_WITH_YOUR_SUBDOMAIN.eu-2.quentn-site.com/public/forms/${formId}/raw/submit`}
        method="post"
        className="space-y-4"
        onSubmit={handleSubmit}
      >
        {/* First Name Field */}
        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
          <input
            type="text"
            name="first_name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Vorname (optional)"
            className="flex h-14 w-full rounded-lg border border-border bg-card px-4 py-3 pl-12 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-200"
          />
        </div>

        {/* Email Field */}
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
          <input
            type="email"
            name="mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Deine E-Mail Adresse"
            required
            className="flex h-14 w-full rounded-lg border border-border bg-card px-4 py-3 pl-12 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-200"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting || !email || !email.includes('@')}
          className="w-full h-14 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
        >
          {isSubmitting ? 'Wird gesendet...' : buttonText}
          {!isSubmitting && (
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          )}
        </button>
      </form>

      <p className="text-xs text-muted-foreground text-center">
        Deine Daten sind sicher. Kein Spam, jederzeit abbestellbar.
      </p>
    </div>
  );
};

export default QuentnEmailForm;
