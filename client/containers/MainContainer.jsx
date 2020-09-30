import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import JobsContainer from './JobsContainer.jsx';
import StatusColumn from './StatusColumn.jsx';

// Container for job listings column and application status columns

const MainContainer = (props) => {
  // Array of possible application statuses
  const status = ['Wishlist', 'Applied', 'Phone Interview', 'Onsite'];
  const columns = [];
  // Create a column for each application status
  for (let i = 0; i < status.length; i++) {
    columns.push(
      <div className="column">
        <h2>{status[i]}</h2>
        <StatusColumn />
      </div>
    );
  }
  return (
    <DragDropContext>
      <div className="main-container">
        <JobsContainer />
        {columns}
      </div>
    </DragDropContext>
  );
};

export default MainContainer;
