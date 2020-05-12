import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import screenshots from "./screenshots"

const Dashboard = () => {

  return (
    <Grid container style={{width: "68vw"}}>
      <Grid item style={{marginTop: "5vh", marginLeft: "1.5vw", marginBottom: "5vh"}}>
        <Typography variant="h1" style={{fontWeight: "bold"}}>
          Screenshot Memories
        </Typography>
        </Grid>
        <Grid container direction="column" style={{textAlign: "center", margin: "auto", marginLeft: "1.5vw", width: "100vw"}}>
          {screenshots.url.map(url => {
            return <Grid item style={{textAlign: "center", marginLeft:"auto", marginBottom: "1vh"}}>
                <Paper>
                  <a href={url} target="_blank">
                    <img src={url} alt="screenshot-memory" style={{width: "50vw", height: "50vh", margin: "1vh 1vw"}}/>
                  </a>
                </Paper>
            </Grid>
          })}
        </Grid>
    </Grid>
  );
};

export default Dashboard;
