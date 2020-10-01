import React, { useContext } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import DrgDrpContext from '../provider/DragDropProvider';
import Login from './Login';
import StatusColumn from './StatusColumn';

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
                const app = column.appsOrder.map((appId) => state.apps[appId]);
                return (
                  <StatusColumn
                    key={column.id}
                    apps={app}
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
