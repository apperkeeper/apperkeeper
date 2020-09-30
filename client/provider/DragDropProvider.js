import React, { useState } from "react";
import initialData from "../data/initialData";

//creating new context
const DrgDrpContext = React.createContext();

const DragDropProvider = ({ children }) => {
  let [state, setState] = useState(initialData);

  const handleEditing = (columnId) => {
    const column = state.columns[columnId];
    column.isEditing = true;

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [column.id]: {
          ...column,
        },
      },
    };

    setState(newState);
  };

  const endEditing = (columnId) => {
    const column = state.columns[columnId];
    column.isEditing = false;

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [column.id]: {
          ...column,
        },
      },
    };

    setState(newState);
  };

  //handling adding new Tasks to columns
  const addData = (columnId, newTask, e) => {
    const column = state.columns[columnId];
    //adding new tasks
    const tasks = state.tasks;
    const tasksLength = Object.keys(tasks).length;
    const newTaskId = `task-${tasksLength + 1}`;
    const taskContent = { id: newTaskId, content: newTask };

    tasks[newTaskId] = taskContent;
    // adding the new task id to the column object
    const newTasksOrder = [...column.tasksOrder];
    newTasksOrder.push(newTaskId);

    const newColumn = {
      ...column,
      tasksOrder: newTasksOrder,
    };

    const newState = {
      ...state,
      tasks,
      columns: {
        ...state.columns,
        [column.id]: {
          ...newColumn,
        },
      },
    };

    setState(newState);
  };

  // handling the dragend method on DragDropContext
  const onDragEnd = (result) => {
    const { draggableId, destination, source } = result;

    // avoid dropping on an a invalid drop area
    if (!destination) {
      return;
    }

    // avoid dropping on the original place
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = state.columns[source.droppableId];
    const end = state.columns[destination.droppableId];
    //reordering tasks in the same column
    if (start === end) {
      const column = state.columns[source.droppableId];
      const newTasksOrder = [...column.tasksOrder];

      newTasksOrder.splice(source.index, 1);
      newTasksOrder.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...column,
        tasksOrder: newTasksOrder,
      };

      const newColumns = {
        ...state.columns,
        [column.id]: {
          ...newColumn,
        },
      };

      const newState = {
        ...state,
        columns: newColumns,
      };
      setState(newState);
      return;
    }

    const startColumn = state.columns[source.droppableId];
    const endColumn = state.columns[destination.droppableId];

    const newStartTasksOrder = [...startColumn.tasksOrder];
    const newEndTasksOrder = [...endColumn.tasksOrder];

    newStartTasksOrder.splice(source.index, 1);
    newEndTasksOrder.splice(destination.index, 0, draggableId);

    const newStartColumn = {
      ...startColumn,
      tasksOrder: newStartTasksOrder,
    };

    const newEndColumn = {
      ...endColumn,
      tasksOrder: newEndTasksOrder,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [startColumn.id]: {
          ...newStartColumn,
        },
        [endColumn.id]: {
          ...newEndColumn,
        },
      },
    };
    setState(newState);
  };

  return (
    <DrgDrpContext.Provider
      value={{
        state,
        onDragEnd,
        addData,
        handleEditing,
        endEditing,
      }}
    >
      {children}
    </DrgDrpContext.Provider>
  );
};

export { DragDropProvider };

export default DrgDrpContext;
