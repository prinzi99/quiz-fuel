import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted text-muted-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Brand & Description */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-white mb-2">
              Philipp's Biohack
            </h3>
            <p className="text-sm max-w-md mx-auto">
              Wissenschaftlich fundierte Informationen für ein gesünderes Leben –
              mit Fokus auf Stoffwechsel und dessen Auswirkungen auf Wohlbefinden und Leistungsfähigkeit.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <Link to="/impressum" className="hover:text-white transition-colors">
              Impressum
            </Link>
            <Link to="/datenschutz" className="hover:text-white transition-colors">
              Datenschutz
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm border-t border-border pt-6">
            <p>© {currentYear} Philipp's Biohack. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;