import React from 'react';
import './App.scss';
import Header from './components/header.js';
import Search from './containers/search.js';
import List from './containers/list.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <List />
    </div>
  );
}

export default App;
