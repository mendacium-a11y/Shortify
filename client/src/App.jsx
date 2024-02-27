import React from 'react';
import Router from './Router/Router';
import routes from './Router/Routes';

const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <Router routes={routes} />
    </div>
  );
};

export default App;