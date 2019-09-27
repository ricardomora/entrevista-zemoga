import React from "react";

import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  addMessage: {
    backgroundImage: "url(https://www.definicionabc.com/wp-content/uploads/Gente.jpg)",
    opacity: "0.7",
  },
  box: {
    marginTop: "80px",
    background: "linear-gradient( rgba(233, 233, 232, 0.8) 100%, rgba(0, 0, 0, 0))",
  },
  message: {
    fontSize: "30px",
    margin: "20px 30px",
  },
  button: {
    border: "3px solid black",
    fontSize: "20px",
    fontWeight: "400",
    width: "210px",
    height: "53px",
    textTransform: "none",
    color: "black",
  }
}));

const AddMessage = () => {
  const classes = useStyles();
  return (
    <div className={classes.addMessage}>
      <Grid container className={classes.box} >
        <Grid item xs={12} sm={9} md={9}>
          <p className={classes.message}>
            Is there anyone else you would want us to add
          </p>
        </Grid>
        <Grid
          container
          xs={12}
          sm={3}
          md={3}
          alignContent="center"
          alignItems="center"
          justify="center"
        >
          <Grid item>
            <Button variant="outlined" className={classes.button}>
               Submit a Name
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddMessage;
