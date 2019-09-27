import React from "react";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from '@material-ui/core/styles';

import "../../App.scss";

const useStyles = makeStyles(theme => ({
  messageAd: {
    width: "100%",
    backgroundColor: "#e9e9e8",
    margin: "40px 0",
  }
}));

const Message = () => {
  const classes = useStyles();
    return (
      <div className={classes.messageAd}>
        <Grid container>
          <Grid item xs={12} sm={5} md={3}>
            <Box
              display="flex"
              alignItems="center"
              flexDirection="column"
              justifyContent="center"
              flexWrap="nowrap"
              textAlign="center"
              m={1}
              css={{ minHeight: 80 }}
            >
              <Box fontSize="22px" fontWeight="300" color="#333333">
                Speak out. Be heard.
              </Box>
              <Box fontSize="37px" fontWeight="700" color="#333333">
                <b>Be counted</b>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={8}>
            <Box
              display="flex"
              alignItems="center"
              flexDirection="column"
              justifyContent="center"
              css={{ minHeight: 80, lineHeight: "23px" }}
              m={1}
            >
              Rule of Thumb is a crowd sourced court of public opinion where
              anyone and everyone can speak out and speak freely. It's easy: You
              share your opinion. we analyze and put the data in a public report.
            </Box>
          </Grid>
          <Grid
            container
            xs={12}
            sm={1}
            md={1}
            alignContent="center"
            alignItems="center"
            justify="center"
          >
            <Grid item>X</Grid>
          </Grid>
        </Grid>
      </div>
    );
  };

  export default Message;