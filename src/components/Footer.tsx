
import React from "react";
import { Heart, ArrowUp, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-dark-charcoal py-10 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <button
            onClick={scrollToTop}
            className="bg-neon-purple/10 p-3 rounded-full text-neon-purple hover:bg-neon-purple/20 transition-colors mb-8"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </button>
          
          <div className="flex items-center space-x-6 mb-6">
            <a
              href="https://github.com/Aryan-MP"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-purple transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/aryan-mp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-purple transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://x.com/aryan81727"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-purple transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>
          
          <p className="text-gray-400 text-sm text-center mb-2">
            &copy; {new Date().getFullYear()} Aryan. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
