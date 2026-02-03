import { Link } from "react-router-dom";
import biohackLogo from "@/assets/biohack-logo.png";

const Header = () => {
  return (
    <header className="bg-primary py-3 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center gap-3">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={biohackLogo}
            alt="Philipp's Biohack Logo"
            className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
          />
          <span className="text-primary-foreground text-lg md:text-xl font-medium tracking-wide">
            Philipp's Biohack
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
