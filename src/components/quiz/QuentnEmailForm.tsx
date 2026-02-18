import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail } from 'lucide-react';
import { useLoadQuentnScript } from '@/hooks/useLoadQuentnScript';
import { getUtmParams } from '@/hooks/useUtmParams';

interface QuentnEmailFormProps {
  onEmailSubmit?: () => void;
  buttonText?: string;
  formId?: string;
  redirectTo?: string;
}

export const QuentnEmailForm = ({ 
  onEmailSubmit, 
  buttonText = "👉 Einordnung per Mail erhalten",
  formId = "2785",
  redirectTo = "/danke"
}: QuentnEmailFormProps) => {
  const navigate = useNavigate();
  useLoadQuentnScript();
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      // Submit to Quentn via fetch
      const formData = new FormData();
      formData.append('first_name', firstName);
      formData.append('mail', email);

      // Append UTM params as Quentn custom fields
      const utmParams = getUtmParams();
      const utmFieldMap: Record<string, string> = {
        utm_source: 'field_utm_source',
        utm_medium: 'field_utm_medium',
        utm_campaign: 'field_utm_campaign',
        utm_content: 'field_utm_content',
        utm_term: 'field_utm_term',
      };
      Object.entries(utmParams).forEach(([key, value]) => {
        if (value) {
          formData.append(utmFieldMap[key] || key, value);
        }
      });

      await fetch(`https://s1k575.eu-2.quentn-site.com/public/forms/${formId}/raw/submit`, {
        method: 'POST',
        body: formData,
        mode: 'no-cors', // Quentn doesn't support CORS
      });

      

      // Call the callback after successful submission
      if (onEmailSubmit) {
        onEmailSubmit();
      }

      // Redirect to thank you page
      navigate(redirectTo);
    } catch (error) {
      console.error('Error submitting to Quentn:', error);
      // Still navigate even if Quentn fails (fallback)
      if (onEmailSubmit) {
        onEmailSubmit();
      }
      navigate(redirectTo);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-4">
      <form
        action={`https://s1k575.eu-2.quentn-site.com/public/forms/${formId}/raw/submit`}
        method="post"
        className="space-y-4"
        onSubmit={handleSubmit}
      >
        {/* First Name Field */}
        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            name="first_name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Vorname"
            className="flex h-14 w-full rounded-lg border border-border bg-card px-4 py-3 pl-12 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-200"
          />
        </div>

        {/* Email Field */}
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="email"
            name="mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-Mail Adresse"
            required
            className="flex h-14 w-full rounded-lg border border-border bg-card px-4 py-3 pl-12 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-200"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-14 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Wird gesendet..." : buttonText}
        </button>
      </form>
    </div>
  );
};

export default QuentnEmailForm;
