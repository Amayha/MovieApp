import React from 'react';
import superagent from 'superagent';
import { makeStyles } from '@material-ui/core';
import { flexbox } from '@material-ui/system';
import {withRouter} from 'react-router-dom'

const APIKEY = '2c73b0f220a02912d9c2cd39c09588e2';
const SERVER = 'https://api.themoviedb.org';

function Search(props) {
    const classes = useStyles();

    const [movies, setMovies] = React.useState(null);

    const handleInput = (event) => {
        let search = event.target.value;
        let url = `${SERVER}/3/search/movie?query=${search}&api_key=${APIKEY}`;
        console.log(search);

        if (search.length < 2) return;

        superagent.get(url).then((response) => {
            console.log(response);
            setMovies(response.body.results);
        });
    }

    const handleClick = (myID) => {
        props.history.push('/movie/' + myID)
    }

    return (
        <div onKeyPress={handleInput}>
            <input type="text" className={classes.search} placeholder={"Search for movie title"} />

            {movies && <ul className={classes.lista}>
                {movies.map((elem) => {
                    return <li onClick={() => handleClick(elem.id)} key={elem.id}>{elem.title} - {elem.id}</li>
                    //Usar el ID para traer toda la info de la peli /movie/id
                })}
            </ul>}
        </div>
    );
}


const useStyles = makeStyles(theme => ({

    search: {
        margin: 20,
        overflow: "hidden",
        position: "relative",
        width: "500px",
        height: "20px",
        display: "block",
        paddingTop: "$width/15",
        borderTop: 15,
        borderRadius: 0,
        borderColor: "#333",
        //background: "#333",
        fontSize: "$width/15",
        zIndex: "10",
    },

    lista: {
        background: 'rgba(0,0,0,0.6)',
        color: "white",
    },


}));

export default withRouter(Search);