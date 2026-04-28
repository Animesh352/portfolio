import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-slate-600 bg-clip-text text-transparent">
              Animesh Giri
            </h3>
            <p className="text-sm text-muted-foreground">
              Data Scientist | AI Engineer | Clinical ML & LLM Systems
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </a>
              <a href="#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Experience
              </a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="icon"
                asChild
              >
                <a href="https://github.com/Animesh352" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
              >
                <a href="https://www.linkedin.com/in/animesh-giri" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
              >
                <a href="mailto:animesh.giri2000@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} Animesh Giri. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
