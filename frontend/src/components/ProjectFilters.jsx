import React from 'react';
import { Button } from './ui/button';

const ProjectFilters = ({ filters, activeFilter, onFilterChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {filters.map((filterName) => (
        <Button
          key={filterName}
          variant={activeFilter === filterName ? 'default' : 'outline'}
          onClick={() => onFilterChange(filterName)}
          className={activeFilter === filterName ? 'bg-blue-600 hover:bg-blue-700' : ''}
        >
          {filterName}
        </Button>
      ))}
    </div>
  );
};

export default ProjectFilters;
