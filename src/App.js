import React from 'react'
import Searcher from './components/Searcher/Searcher'
import './App.css';

function App() {
  // <input onChange={event => setSearch(event.target.value)}/>
  return (
    <div className="App">
      <section className="App-content">
        <Searcher />
      </section>
    </div>
  );
}

export default App;