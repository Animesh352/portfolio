import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'Supply Chain Forecasting & Inventory Optimization',
      description: 'Production-style Python analytics system for demand forecasting, inventory optimization, and risk simulation using the M5 dataset.',
      image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwzfHxzdXBwbHklMjBjaGFpbiUyMGRhc2hib2FyZHxlbnwwfHx8fDE3NzczOTY1Njh8MA&ixlib=rb-4.1.0&q=85',
      tags: ['Forecasting', 'Data Engineering', 'Decision Support'],
      tech: ['Python', 'XGBoost', 'FastAPI', 'Streamlit', 'Docker', 'Evidently', 'Monte Carlo'],
      highlights: [
        'Built ETL-style pipeline for multi-table retail demand data',
        'Engineered lag, rolling, calendar, and price features',
        'Trained XGBoost model with MAE, RMSE, and RMSSE validation',
        'Added safety stock, reorder point, EOQ, and Monte Carlo risk simulation',
        'Delivered API and dashboard interfaces'
      ],
      github: 'https://github.com/Animesh352/Supply-Chain-Demand-Forecasting',
      category: ['Forecasting', 'Data Engineering']
    },
    {
      title: 'Infant MRI ML Suite',
      description: 'Modular clinical AI project for infant brain MRI analysis, age prediction, benchmark evaluation, and biomarker reporting.',
      image: 'https://images.unsplash.com/photo-1758691463165-ca9b5bc2b28a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwYnJhaW4lMjBNUkl8ZW58MHx8fHwxNzc3Mzk2NTc0fDA&ixlib=rb-4.1.0&q=85',
      tags: ['Healthcare AI', 'Medical Imaging', 'Deep Learning'],
      tech: ['Python', 'PyTorch', 'TensorFlow', 'Streamlit', 'Medical Imaging', 'YAML'],
      highlights: [
        'Supports dataset validation, training, evaluation, and reporting workflows',
        'Includes configurable experiments for age prediction and model benchmarking',
        'Provides Streamlit UI for data, training, reports, benchmark results, and QA',
        'Designed for reproducible medical ML experimentation'
      ],
      github: 'https://github.com/Animesh352/Infant_mri',
      category: ['Healthcare AI']
    },
    {
      title: 'BookBot',
      description: 'Book recommendation and conversational discovery project using NLP and semantic search concepts.',
      image: 'https://images.unsplash.com/photo-1568667256549-094345857637?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwyfHxib29rJTIwbGlicmFyeXxlbnwwfHx8fDE3NzczOTY1Nzh8MA&ixlib=rb-4.1.0&q=85',
      tags: ['NLP/LLM', 'Recommendation Systems'],
      tech: ['Python', 'NLP', 'Embeddings', 'Recommendation Systems'],
      highlights: [
        'Demonstrates applied NLP and recommendation workflow',
        'Useful for showing semantic search and user-facing AI interaction design'
      ],
      github: 'https://github.com/Animesh352/BookBot',
      category: ['NLP/LLM']
    },
    {
      title: 'Intelligent Document Classification',
      description: 'Machine learning pipeline for automated document classification using text preprocessing and classification models.',
      image: 'https://images.unsplash.com/photo-1552833093-0522172fff1f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwxfHxkb2N1bWVudCUyMHByb2Nlc3Npbmd8ZW58MHx8fHwxNzc3Mzk2NTg0fDA&ixlib=rb-4.1.0&q=85',
      tags: ['NLP/LLM', 'Classification', 'Document AI'],
      tech: ['Python', 'Scikit-learn', 'NLP', 'Classification'],
      highlights: [
        'Demonstrates document intelligence, text processing, and model evaluation'
      ],
      github: 'https://github.com/Animesh352/Intelligent-Document-Classification',
      category: ['NLP/LLM', 'Data Engineering']
    }
  ];

  const filters = ['All', 'Healthcare AI', 'NLP/LLM', 'Forecasting', 'Data Engineering'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category.includes(filter));

  return (
    <section id="projects" className="section-padding bg-accent/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
          Featured Projects
        </h2>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filterName) => (
            <Button
              key={filterName}
              variant={filter === filterName ? 'default' : 'outline'}
              onClick={() => setFilter(filterName)}
              className={filter === filterName ? 'bg-blue-600 hover:bg-blue-700' : ''}
            >
              {filterName}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="border-2 hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
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
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-accent rounded text-xs font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm text-muted-foreground">Key Highlights:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-muted-foreground">{highlight}</li>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
