const Footer = () => {
  return (
    <footer className="py-8 px-5 bg-muted/50 border-t border-border">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} PhilipsBioHack. Alle Rechte vorbehalten.</p>
          
          <div className="flex items-center gap-6">
            <a 
              href="/datenschutz" 
              className="hover:text-foreground transition-colors"
            >
              Datenschutz
            </a>
            <a 
              href="/impressum" 
              className="hover:text-foreground transition-colors"
            >
              Impressum
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;