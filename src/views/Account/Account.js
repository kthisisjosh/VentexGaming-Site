import React from 'react';
import { Button, Grid } from '@material-ui/core';
const DiscordOauth2 = require("discord-oauth2")
const oauth = new DiscordOauth2()


const Account = () => {
  return (
      <Grid container>
        <Grid item style={{marginLeft: "1.5vw", marginTop: "5vh"}}>
          <Button variant="outlined" style={{width: "10vw", height: "5vh"}}>
        <a style={{textDecoration: "none"}} href="https://discord.com/api/oauth2/authorize?client_id=709892072613871707&redirect_uri=https%3A%2F%2Fventexgaming.netlify.app%2F&response_type=code&scope=identify">
          Login with Discord
        </a>
      </Button>
        </Grid>
      </Grid>
  );
};

export default Account;
