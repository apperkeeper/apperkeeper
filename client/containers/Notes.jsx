import React, { useContext, useRef } from 'react';
import DrgDrpContext from '../provider/DragDropProvider';
import AppCard from './AppCard';

const Notes = ({ columnId }) => {
  const { addData, endEditing } = useContext(DrgDrpContext);
  let newTask = useRef(null);
  const handleAddClick = () => {
    endEditing(columnId);
    if (newTask.value === '') {
      alert('Task cannot be empty!');
    } else {
      addData(columnId, newTask.value);
    }
  };

  return (
    <div>
      <AppCard />
      <button type="button" onClick={handleAddClick}>
        Add Task
      </button>
    </div>
  );
};

export default Notes;
