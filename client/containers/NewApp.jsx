import React, { useContext, useRef } from 'react';
import DrgDrpContext from '../provider/DragDropProvider';
import AppCard from './AppCard';

const NewApp = ({ columnId }) => {
  const { addData, endEditing } = useContext(DrgDrpContext);
  let newTask = useRef(null);

  const handleAddClick = () => {
    endEditing(columnId);
    addData(columnId, newTask.value);
  };

  return (
    <div>
      <AppCard />
      <button type="button" onClick={handleAddClick}>
        Add App
      </button>
    </div>
  );
};

export default NewApp;
