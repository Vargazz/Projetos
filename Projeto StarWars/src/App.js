import React from 'react';
import './App.css';
import Table from './components/Table';
import Provider from './context/Provider';

function App() {
  return (
    <div>
      <img src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png" alt="StarWars" className="logo" />
      <Provider>
        <Table />
      </Provider>
    </div>
  );
}

export default App;
