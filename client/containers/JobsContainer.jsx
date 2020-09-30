import React from 'react';
import Card from './Card';

// Container to populate with job listings from LinkedIn API

const JobsContainer = (props) => {
  return (
    <div className="column">
      <h2>Jobs Container</h2>
      <Card />
    </div>
  );
};

export default JobsContainer;
