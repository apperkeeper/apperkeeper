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
    <form className="card-content bg-form swing-in-bottom-bck">
      <AppCard />
      <button
        type="button"
        className="button has-text-white swing-in-bottom-bck"
        onClick={handleAddClick}
      >
        Add Task
      </button>
    </form>
  );
};

export default Notes;
