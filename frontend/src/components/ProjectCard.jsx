import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Github } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <Card className="border-2 hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag) => (
            <Badge 
              key={`${project.id}-tag-${tag}`} 
              variant="secondary" 
              className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription className="text-base">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2 text-sm text-muted-foreground">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span 
                  key={`${project.id}-tech-${tech}`} 
                  className="px-2 py-1 bg-accent rounded text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-sm text-muted-foreground">Key Highlights:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              {project.highlights.map((highlight) => (
                <li 
                  key={`${project.id}-highlight-${highlight.substring(0, 20)}`} 
                  className="text-muted-foreground"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" asChild>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            View on GitHub
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
