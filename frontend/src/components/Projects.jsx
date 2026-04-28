import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectFilters from './ProjectFilters';
import { projectsData, filters } from '../data/projectsData';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category.includes(filter));

  return (
    <section id="projects" className="section-padding bg-accent/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
          Featured Projects
        </h2>
        
        <ProjectFilters 
          filters={filters}
          activeFilter={filter}
          onFilterChange={setFilter}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
