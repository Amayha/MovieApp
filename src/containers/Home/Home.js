import React from 'react';
import { makeStyles, Button, Grid } from '@material-ui/core';
import Add from '@material-ui/icons/Add';
import ListaItem from '../../components/ListasItem/ListaItem';

function Home(props) {
  const classes = useStyles();

  function handleClick() {
    props.history.push('/movies');
  }

  return (
    <div className={classes.container}>
      <div className={classes.banner}>
        <div className={classes.mainContent}>
          <img className={classes.logo} src="https://teearabia.com/wp-content/uploads/fancy_products_uploads/2018/08/07/656ad475950241848cb506c908968dc6.png" alt="Logo" />
          <h2 className={classes.season}>Temporada</h2>
          <p className={classes.desc}>La serie trata sobre la vida de un grupo de amigos —Chandler Bing, Phoebe Buffay, Monica Geller, Ross Geller, Rachel Green y Joey Tribbiani— que residen en Manhattan, Nueva York. Suceden tanto buenos como malos momentos, pero con una crítica cómica a los hechos más trascendentales de la actualidad.</p>
          <div>
            <Button onClick={handleClick} variant="contained" color="secondary" className={classes.button}>
              Watch now
            </Button>
            <Button variant="contained" color="primary" className={classes.button}>
              My list
                <Add className={classes.rightIcon} />
            </Button>
          </div>
        </div>
        <div className={classes.content}>
          <Grid container spacing={2} className={classes.line}>
            <Grid item md={2}>
              <ListaItem/>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  container: {
      width: '100%',
      height: 650,
  },
  banner: {
      width: '100%',
      height: '100%',
      backgroundImage: 'url("https://images3.alphacoders.com/641/thumb-1920-641481.jpg")',
      backgroundPosition: 'cover',
      backgroundSize: 'cover'
  },
  mainContent: {
      width: '40%',
      height: '100%',
      padding: '8%',
  },
  logo: {
      width: 500,
  },
  season: {
      margin: 0,
      padding: 5,
      color: 'white',
      fontSize: 20,
      fontWeight: 'bolder'
  },
  desc: {
      margin: 0,
      marginTop: 1,
      padding: 5,
      color: 'white',
      fontSize: 15,
      textAlign: 'justify'
  },
  button: {
      margin: 5,
  },
  content: {
      width: '100%'
  },
  line: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
  },
}));

export default Home;