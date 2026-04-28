import React from 'react';
import { Card, CardContent } from './ui/card';

const About = () => {
  return (
    <section id="about" className="section-padding bg-accent/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          About Me
        </h2>
        <Card className="border-2">
          <CardContent className="p-8 sm:p-12">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                I'm a Data Scientist and AI Engineer specializing in clinical machine learning, 
                large language models, and production-ready data systems. My work focuses on 
                transforming complex healthcare and business data into actionable insights and 
                decision-support tools.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                With experience in deep learning for medical imaging, time-series forecasting, 
                and NLP systems, I build end-to-end ML pipelines that bridge the gap between 
                research prototypes and production deployments.
              </p>
              <p className="text-lg leading-relaxed">
                I'm passionate about using data science and AI to solve real-world problems, 
                particularly in healthcare where technology can directly improve patient outcomes 
                and clinical workflows.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
