import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { AboutPage, HomePage } from './pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
                <Route>
                    <Route path="/" ><HomePage/></Route> 
                    <Route path='/about'><AboutPage/></Route> 
                </Route>   
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
