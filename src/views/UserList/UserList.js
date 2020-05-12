import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Iframe from "react-iframe"


const UserList = () => {

  return (
    <Grid container>
      <Grid item>
        <Typography>
          
        </Typography>
      </Grid>
      <Grid item style={{margin: "auto", marginTop: "7.5vh"}}>
      <Iframe url="https://discord.com/widget?id=167039507663814657&theme=dark" width="450px" height="600px" />
      </Grid>
    </Grid>
  );
};

export default UserList;
