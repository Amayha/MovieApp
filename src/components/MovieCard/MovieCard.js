import React from 'react';
import { makeStyles } from '@material-ui/core';
import { flexbox } from '@material-ui/system';

function MovieCard() {
    const classes = useStyles();



    return (
        <div className={classes.MovieCard}>

            <div className={classes.imagen}>
                <img className={classes.imagenI} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh1XjYErppgcnNVYpFazgLn196HBsqpRFHSPVC80cB89VqXVQeEw'></img>
            </div>

            <div className={classes.Contenido}>

                <h2 className={classes.Contenido__Titulo}>KUNG FU PANDA</h2>
                <p className={classes.Contenido__frase}>El guerrero dragon</p>
                <p className={classes.info}> La historia se desarrolla en el Valle de la Paz, un lugar ficticio de la Antigua China habitado por animales antropomorfos. Po (Jack Black), un joven panda torpe y con sobrepeso, es un entusiasta del kung-fu que idolatra a los Cinco Furiosos, que son los guerreros más poderosos del kung fu. </p>
                <p className={classes.Contenido__cat}>Comedia, Pandas, Kung Fu</p>
                <p className={classes.info}>DreamWorks Animation, Paramount Pictures</p>

                <div className={classes.MasInfo}>
                    <div className={classes.Extras1}>
                        <p className={classes.info}>Original Release: </p>
                        <p className={classes.infogreen}>2014-11-05</p>
                        <p className={classes.info}>Box Office: </p>
                        <p className={classes.infogreen}>$675,120,017</p>
                    </div>

                    <div className={classes.Extras2}>
                        <p className={classes.info}>Running Time: </p>
                        <p className={classes.infogreen}> 169 mins</p>
                        <p className={classes.info}>Vote Average: </p>
                        <p className={classes.infogreen}>8.3 / 10</p>
                    </div>

                </div> {/* fin de MasInfo*/}

            </div> {/* fin de Contenido*/}
            {/* fin de Moviecard*/}

        </div>

    );
}


const useStyles = makeStyles(theme => ({

    MovieCard: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(0,0,0,0.6)',
        fontSize: 20,
        margin: 50,

    },

    imagen: {
        width: '50%',
        backgroundColor: '#fffcd6',
    },

    imagenI: {
        width: 200,
        margin: 1,
    },

    Contenido: {
        margin: 20,
        padding: 0,
        width: '50%',
    },

    Contenido__Titulo: {
        color: 'white',
        fontSize: 30,
        margin: '0',
    },

    Contenido__frase: {
        color: '#01f066',
        fontSize: 20,
    },

    info: {
        margin: 0,
        fontSize: 15,
        color: 'white',
    },

    MasInfo: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,

    },

    Extras1: {
        width: '50%',
    },
    Extras2: {
        width: '50%',
    },

    Contenido__cat: {
        color: '#01f066'
    },
    infogreen: {
        margin: 0,
        fontSize: 15,
        color: '#01f066',
    },



}));





export default MovieCard;