import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column"
    },
    logo: {
      maxWidth: "100%",
      maxHeight: "33vh"
    }
  })
);

export default function App() {
  const classes = useStyles();
  return (
    <Container maxWidth="xl">
      <Box my={4} textAlign="center">
        <Typography variant="h4" component="h1" gutterBottom>
          Charting Demo!
        </Typography>
      </Box>
      <Box my={4} className={classes.root}>
        <img
          src="/static/logo.svg"
          className={classes.logo}
          alt="Break Paradigm"
        />
      </Box>
    </Container>
  );
}
