import React from 'react';
import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <div className= "container">
      <header className="App-header">
     <h1>Dictionary</h1>
      </header>
      <Dictionary defaultKeyword="Minsk"/>
      <footer>
        Designed and built by <a href="https://www.linkedin.com/in/helena-stalbovska-b51435181/" target="_blank" title="Link to Helena's LinkedIn profile" rel="noreferrer" >Helena Stalbovska</a> and is open-sourced on <a href="https://github.com/Helena-161/dictionary-app" target="_blank" title="Link to a repository with open-sourced code" rel="noreferrer">GitHub</a>    
      </footer>  
      </div>  
    </div>
  );
}

export default App;
