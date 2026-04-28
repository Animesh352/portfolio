// Project data - separated for maintainability
export const projectsData = [
  {
    id: 'supply-chain',
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
    id: 'infant-mri',
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
    id: 'bookbot',
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
    id: 'document-classification',
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

export const filters = ['All', 'Healthcare AI', 'NLP/LLM', 'Forecasting', 'Data Engineering'];
