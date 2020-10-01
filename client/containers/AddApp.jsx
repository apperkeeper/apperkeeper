import React, { useContext } from 'react';
import { IoIosAddCircle } from 'react-icons/io';
import DrgDrpContext from '../provider/DragDropProvider';
import NewApp from './NewApp';

const AddJob = ({ columnId, isEditing }) => {
  const { handleEditing } = useContext(DrgDrpContext);
  if (isEditing) {
    return <NewApp columnId={columnId} />;
  } else {
    return (
      <div className="has-text-right">
        <IoIosAddCircle
          onClick={() => handleEditing(columnId)}
          style={{ fontSize: '30px', marginRight: '10px' }}
        />
      </div>
    );
  }
};

export default AddApp;
