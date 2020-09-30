import React, { useEffect } from 'react';
import AppCard from './AppCard';

const AllCards = React.memo(({ tasks }) => {
  useEffect(() => {}, [tasks]);
  return tasks.map((task, index) => (
    <AppCard key={task.id} task={task} index={index} />
  ));
});

export default AllCards;
