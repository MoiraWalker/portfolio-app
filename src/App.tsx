import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import { AppRouter } from './routing/AppRouter';

function App() {
  return (
    <div className="App">
      <Navigation />
        <Router>
          <AppRouter />
        </Router>
    </div>
  );
}

export default App;
