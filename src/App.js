import React from "react";

import Container from "@material-ui/core/Container";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

function App() {
  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6">Sagar R. Kothari</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" style={{padding: "20px"}}>
        <Card>
          <CardContent>
            <Typography>Word of the day</Typography>
            <Typography>Date goes here</Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default App;
