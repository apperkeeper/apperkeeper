import React from 'react';
import AllCards from './AllCards';
import AddJob from './AddJob';
import { Droppable } from 'react-beautiful-dnd';

const StatusColumn = React.memo(({ tasks, column, isEditing }) => {
  return (
    <div className="column is-marginless">
      <div className="card card-radius ">
        <div className="card-content">
          <p className="title is-5 has-text-white">{column.title}</p>
          <Droppable droppableId={column.id}>
            {(provided, snapshot) => (
              <div
                className="list is-hoverable"
                {...provided.droppableProps}
                ref={provided.innerRef}
                // isDraggingOver={snapshot.isDraggingOver}
              >
                <AllCards tasks={tasks} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
        <AddJob columnId={column.id} isEditing={isEditing} />
      </div>
    </div>
  );
});

export default StatusColumn;
