import React from 'react';
import Movie from '../Movie/Movie'
import Search from '../../components/Search/Search'
import NavBar from '../../components/NavBar/NavBar';
import Home from '../Home/Home';



function App() {
  return (
    <div className="App">

      <div>
      <NavBar/>
      <Search></Search>

      </div>
      <Home/>
      <Movie/>
    </div>
  );
}

export default App;
