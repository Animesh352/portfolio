import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 'neonatal-signal-analysis',
      title: 'Neonatal Physiological Signal Analysis',
      description: 'Built MATLAB/Python pipelines for neonatal physiological signal preprocessing and analysis'
    },
    {
      id: 'blood-pressure-prediction',
      title: 'Deep Learning for Blood Pressure Prediction',
      description: 'Evaluated deep learning models for continuous blood pressure prediction from PPG/NIRS-PPG signals'
    },
    {
      id: 'clinical-llm-prototypes',
      title: 'Clinical LLM Workflow Prototypes',
      description: 'Developed LLM-based clinical workflow prototypes for structured report review and evaluation'
    },
    {
      id: 'research-analytics',
      title: 'Research & Product Analytics',
      description: 'Built ETL pipelines, dashboards, and APIs for research and product analytics workflows'
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Experience Highlights
        </h2>
        <div className="space-y-6">
          {experiences.map((exp) => (
            <Card key={exp.id} className="border-2 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-start gap-3">
                  <Briefcase className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <span>{exp.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
