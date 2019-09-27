import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    dividerLine: {
        height: "1px",
        marginBottom: "-1px",
        border: "none",
        borderBottom: "1px solid #ececec",
        marginTop: "40px",
    }
  }));


export default function Divider() {
    const classes = useStyles();
    return <hr className={classes.dividerLine}></hr>;
};
