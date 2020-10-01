import React, { useContext } from 'react';
import StatusColumn from './StatusColumn';
import DrgDrpContext from '../provider/DragDropProvider';
import { DragDropContext } from 'react-beautiful-dnd';
import Login from '../components/Login';

function App() {
  const { state, onDragEnd } = useContext(DrgDrpContext);

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="section bg-full">
          <div className="container bg-blue">
            <div className="columns is-multiline is-mobile">
              {state.columnsOrder.map((columnId, index) => {
                const column = state.columns[columnId];
                const isEditing = column.isEditing;
                const task = column.appsOrder.map(
                  (taskId) => state.tasks[taskId]
                );
                return (
                  <StatusColumn
                    key={column.id}
                    tasks={task}
                    index={index}
                    column={column}
                    isEditing={isEditing}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </DragDropContext>
    </div>
  );
}

export default App;
