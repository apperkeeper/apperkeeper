import React from "react";
import { Draggable } from "react-beautiful-dnd";

const Cards = React.memo(({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <li
          className="list-item has-text-white"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {task.content}
          <button className="delete is-pulled-right btn-hover" />
        </li>
      )}
    </Draggable>
  );
});

export default Cards;
