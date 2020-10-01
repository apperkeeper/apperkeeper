import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Cards = React.memo(({ app, index }) => {
  return (
    <Draggable draggableId={app.id} index={index}>
      {(provided, snapshot) => (
        <li
          className="list-item"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <p>Company: {app.company}</p>
          <p>Position: {app.position}</p>
          <p>Contact: {app.contact}</p>
          <p>Notes: {app.notes}</p>
          <p>Date Applied: {app.date}</p>
          <button className="delete is-pulled-right btn-hover" />
        </li>
      )}
    </Draggable>
  );
});

export default Cards;
