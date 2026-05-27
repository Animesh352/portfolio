import React, { useState } from 'react';
import { Github, Linkedin, Mail, Download, MapPin, User, Brain, Database, TrendingUp, GitBranch, Code2, Terminal, Network, Cpu } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const [imageError, setImageError] = useState(false);

  // Floating icon configuration
  const leftIcons = [
    { Icon: Brain, delay: '0s', duration: '20s', top: '15%', left: '10%' },
    { Icon: Database, delay: '2s', duration: '25s', top: '45%', left: '15%' },
    { Icon: TrendingUp, delay: '4s', duration: '22s', top: '70%', left: '8%' },
    { Icon: Network, delay: '1s', duration: '28s', top: '30%', left: '5%' },
  ];

  const rightIcons = [
    { Icon: Code2, delay: '1s', duration: '24s', top: '20%', right: '12%' },
    { Icon: Terminal, delay: '3s', duration: '26s', top: '50%', right: '8%' },
    { Icon: Cpu, delay: '0s', duration: '23s', top: '75%', right: '15%' },
    { Icon: GitBranch, delay: '2s', duration: '27s', top: '35%', right: '6%' },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Floating Icons - Hidden on mobile */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        {/* Left Side Icons */}
        {leftIcons.map((config, index) => {
          const IconComponent = config.Icon;
          return (
            <div
              key={`left-${index}`}
              className="absolute animate-float"
              style={{
                top: config.top,
                left: config.left,
                animationDelay: config.delay,
                animationDuration: config.duration,
              }}
            >
              <IconComponent 
                className="w-12 h-12 text-blue-500/20 dark:text-blue-400/20" 
                strokeWidth={1.5}
              />
            </div>
          );
        })}

        {/* Right Side Icons */}
        {rightIcons.map((config, index) => {
          const IconComponent = config.Icon;
          return (
            <div
              key={`right-${index}`}
              className="absolute animate-float"
              style={{
                top: config.top,
                right: config.right,
                animationDelay: config.delay,
                animationDuration: config.duration,
              }}
            >
              <IconComponent 
                className="w-12 h-12 text-slate-500/20 dark:text-slate-400/20" 
                strokeWidth={1.5}
              />
            </div>
          );
        })}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          {/* Profile Image */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              {!imageError ? (
                <>
                  <img
                    src={`${process.env.PUBLIC_URL}/profile.jpg`}
                    alt="Animesh Giri"
                    loading="lazy"
                    onError={() => setImageError(true)}
                    className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full object-cover border-2 border-border shadow-lg"
                  />
                  <div className="absolute inset-0 rounded-full ring-1 ring-black/5 dark:ring-white/10"></div>
                </>
              ) : (
                <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 border-2 border-border shadow-lg flex items-center justify-center">
                  <User className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-white/90" />
                </div>
              )}
            </div>
          </div>

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
              <a href={`${process.env.PUBLIC_URL}/Animesh_Giri_Resume.pdf`} download>
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
