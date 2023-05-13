import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import * as Material from "@mui/material";
import { IconButton, Link, Toolbar, Typography } from "@mui/material";
import React from "react";
export class AppBar extends React.Component {
  render() {
    return (
      <Material.AppBar elevation={0} color='transparent' position='static'>
        <Toolbar>
          <Typography variant='h5' sx={{ flexGrow: 1 }}></Typography>
          <Link
            color='inherit'
            href='https://github.com/yuliswe'
            target='_blank'>
            <IconButton color='inherit'>
              <GitHubIcon />
            </IconButton>
          </Link>
          <Link
            color='inherit'
            href='https://www.linkedin.com/in/yulise/'
            target='_blank'>
            <IconButton color='inherit'>
              <LinkedInIcon />
            </IconButton>
          </Link>
        </Toolbar>
      </Material.AppBar>
    );
  }
}
