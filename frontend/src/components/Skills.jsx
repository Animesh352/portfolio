import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Code2, Brain, MessageSquare, Database, Cloud, BarChart3 } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      id: 'programming',
      title: 'Programming',
      icon: Code2,
      skills: ['Python', 'SQL', 'MATLAB', 'JavaScript'],
      color: 'text-blue-500'
    },
    {
      id: 'machine-learning',
      title: 'Machine Learning',
      icon: Brain,
      skills: ['Scikit-learn', 'XGBoost', 'PyTorch', 'TensorFlow', 'Forecasting', 'Classification', 'Deep Learning'],
      color: 'text-purple-500'
    },
    {
      id: 'llms-nlp',
      title: 'LLMs & NLP',
      icon: MessageSquare,
      skills: ['OpenAI', 'Claude', 'LangChain', 'Hugging Face', 'RAG', 'Prompt Engineering', 'Embeddings'],
      color: 'text-green-500'
    },
    {
      id: 'data-engineering',
      title: 'Data Engineering',
      icon: Database,
      skills: ['ETL', 'REST APIs', 'PostgreSQL', 'Airflow', 'Docker'],
      color: 'text-orange-500'
    },
    {
      id: 'cloud-tools',
      title: 'Cloud & Tools',
      icon: Cloud,
      skills: ['Azure', 'AWS', 'Git', 'Streamlit', 'Power BI', 'Tableau'],
      color: 'text-cyan-500'
    },
    {
      id: 'specializations',
      title: 'Specializations',
      icon: BarChart3,
      skills: ['Healthcare AI', 'Medical Imaging', 'Time-Series Analysis', 'Risk Modeling', 'MLOps'],
      color: 'text-rose-500'
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.id} className="border-2 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <IconComponent className={`h-6 w-6 ${category.color}`} />
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={`${category.id}-${skill}`}
                        className="px-3 py-1 bg-accent rounded-full text-sm font-medium text-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
