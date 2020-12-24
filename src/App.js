import React from 'react'
import Searcher from './components/Searcher/Searcher'
import './App.css';
import {Route} from 'wouter'
import ListGifs from './components/ListGifs/ListGifs'

function App() {

  return (
    <div className="App">
      <section className="App-content">
        <Searcher />
        <Route
          component={ListGifs}
          path="/:keyword"
        />
      </section>
    </div>
  );
}

export default App;