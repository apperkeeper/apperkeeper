import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { DragDropProvider } from './provider/DragDropProvider';
import './sass/main.scss';

ReactDOM.render(
  <React.StrictMode>
    <DragDropProvider>
      <App />
    </DragDropProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
