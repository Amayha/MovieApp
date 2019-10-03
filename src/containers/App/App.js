import React from 'react';
import { makeStyles, CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Movie from '../Movie/Movie'
import Search from '../../components/Search/Search'
import NavBar from '../../components/NavBar/NavBar';
import Home from '../Home/Home';


function App() {
  const classes = useStyles();

  return (
    <Router>

      <div className="App">

        <div>
          <NavBar />
          <Search></Search>

        </div>
        
      </div>

      <Route path="/" exact component={Home} />
      <Route path="/movie/:id" component={Movie} />

      <CssBaseline />

    </Router>

  );
}

const useStyles = makeStyles(theme => ({
  navbar: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    zIndex: '0'
  },
  searchContainer: {
    marginLeft: '40%',
  },
  search: {
  }
}));

export default App;
