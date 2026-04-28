import React from 'react';
import { Github, Linkedin, Mail, Download, MapPin } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              Animesh Giri
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
              Data Scientist | AI Engineer | Clinical ML & LLM Systems
            </p>
            <p className="text-lg text-muted-foreground flex items-center justify-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Boston, MA</span>
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              I build machine learning, LLM, and data pipeline systems that turn complex data into usable decision-support tools.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
            >
              <a href="/portfolio/Animesh_Giri_Resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 pt-4">
            <Button
              variant="ghost"
              size="icon"
              asChild
            >
              <a href="https://github.com/Animesh352" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
            >
              <a href="https://www.linkedin.com/in/animesh-giri" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
            >
              <a href="mailto:animesh.giri2000@gmail.com" aria-label="Email">
                <Mail className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
