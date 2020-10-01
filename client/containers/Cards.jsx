import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Cards = React.memo(({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <li
          className="list-item"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <p>Company: {task.company}</p>
          <p>Position: {task.position}</p>
          <p>Contact: {task.contact}</p>
          <p>Notes: {task.notes}</p>
          <p>Date Applied: {task.date}</p>
          <button className="delete is-pulled-right btn-hover" />
        </li>
      )}
    </Draggable>
  );
});

export default Cards;
