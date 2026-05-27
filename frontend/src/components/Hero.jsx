import React, { useState } from 'react';
import { Github, Linkedin, Mail, Download, MapPin, User, Brain, Database, TrendingUp, GitBranch, Code2, Terminal, Network, Cpu } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const [imageError, setImageError] = useState(false);

  // Floating icon configuration - Dense pattern covering entire background including center
  const leftIcons = [
    { Icon: Brain, delay: '0s', duration: '20s', top: '10%', left: '8%' },
    { Icon: Database, delay: '2s', duration: '25s', top: '25%', left: '12%' },
    { Icon: TrendingUp, delay: '4s', duration: '22s', top: '40%', left: '6%' },
    { Icon: Network, delay: '1s', duration: '28s', top: '55%', left: '10%' },
    { Icon: Brain, delay: '3s', duration: '24s', top: '70%', left: '8%' },
    { Icon: Database, delay: '5s', duration: '26s', top: '85%', left: '12%' },
    { Icon: GitBranch, delay: '1.5s', duration: '23s', top: '18%', left: '4%' },
    { Icon: Network, delay: '4.5s', duration: '27s', top: '48%', left: '14%' },
    { Icon: TrendingUp, delay: '2.5s', duration: '21s', top: '63%', left: '5%' },
    { Icon: Cpu, delay: '3.5s', duration: '29s', top: '78%', left: '9%' },
  ];

  const centerIcons = [
    { Icon: Network, delay: '1s', duration: '26s', top: '8%', left: '25%' },
    { Icon: GitBranch, delay: '3s', duration: '24s', top: '8%', right: '25%' },
    { Icon: Database, delay: '2s', duration: '28s', top: '15%', left: '35%' },
    { Icon: Terminal, delay: '4s', duration: '23s', top: '15%', right: '35%' },
    { Icon: Cpu, delay: '0s', duration: '25s', top: '22%', left: '20%' },
    { Icon: Code2, delay: '2.5s', duration: '27s', top: '22%', right: '20%' },
    { Icon: Brain, delay: '1.5s', duration: '22s', top: '88%', left: '30%' },
    { Icon: TrendingUp, delay: '3.5s', duration: '26s', top: '88%', right: '30%' },
    { Icon: Network, delay: '4.5s', duration: '24s', top: '92%', left: '40%' },
    { Icon: GitBranch, delay: '0.5s', duration: '28s', top: '92%', right: '40%' },
  ];

  const rightIcons = [
    { Icon: Code2, delay: '1s', duration: '24s', top: '12%', right: '10%' },
    { Icon: Terminal, delay: '3s', duration: '26s', top: '27%', right: '6%' },
    { Icon: Cpu, delay: '0s', duration: '23s', top: '42%', right: '12%' },
    { Icon: GitBranch, delay: '2s', duration: '27s', top: '57%', right: '8%' },
    { Icon: Code2, delay: '4s', duration: '25s', top: '72%', right: '11%' },
    { Icon: Terminal, delay: '1.5s', duration: '28s', top: '87%', right: '7%' },
    { Icon: Network, delay: '2.5s', duration: '22s', top: '20%', right: '14%' },
    { Icon: Brain, delay: '3.5s', duration: '24s', top: '50%', right: '5%' },
    { Icon: Cpu, delay: '4.5s', duration: '26s', top: '65%', right: '13%' },
    { Icon: GitBranch, delay: '0.5s', duration: '25s', top: '80%', right: '9%' },
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
                className="w-16 h-16 text-blue-500/50 dark:text-blue-400/30" 
                strokeWidth={1.5}
              />
            </div>
          );
        })}

        {/* Center Background Icons */}
        {centerIcons.map((config, index) => {
          const IconComponent = config.Icon;
          return (
            <div
              key={`center-${index}`}
              className="absolute animate-float"
              style={{
                top: config.top,
                left: config.left,
                right: config.right,
                animationDelay: config.delay,
                animationDuration: config.duration,
              }}
            >
              <IconComponent 
                className="w-16 h-16 text-slate-400/50 dark:text-slate-500/30" 
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
                className="w-16 h-16 text-slate-500/50 dark:text-slate-400/30" 
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
