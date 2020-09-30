import React, { useEffect } from 'react';
import Cards from './Cards';

const AllCards = React.memo(({ tasks }) => {
  useEffect(() => {}, [tasks]);
  return tasks.map((task, index) => (
    <Cards key={task.id} task={task} index={index} />
  ));
});

export default AllCards;
