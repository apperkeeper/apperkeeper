import React from 'react';
import MainContainer from './MainContainer.jsx';
import Login from '../components/Login';
import '../css/app.css';

const App = (props) => {
  return (
    <div>
      <Login />
      <h1>Apper Keeper</h1>
      <MainContainer />
    </div>
  );
};

export default App;
