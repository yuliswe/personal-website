import { Box, Grid, Link, Stack, Typography } from "@mui/material";
import React from "react";
import { mediaQuery } from "../AppContext";

type _Props = {
  title: string;
  url: string;
  role: string;
  description: string;
  mediaQuery?: typeof mediaQuery;
};

export class ResumeProject extends React.PureComponent<_Props> {
  get smallScreen(): boolean {
    return this.props.mediaQuery?.sm || false;
  }

  render() {
    return (
      <Box className='ResumeProject keep-together'>
        <Grid container>
          <Grid
            item
            xs={this.smallScreen ? 12 : 8}
            whiteSpace='nowrap'
            flexGrow={1}>
            <Typography
              variant='h6'
              textAlign={this.smallScreen ? "center" : "left"}>
              {this.props.title}
            </Typography>
          </Grid>
          <Grid item xs={this.smallScreen ? 12 : 4} whiteSpace='nowrap'>
            <Typography textAlign={this.smallScreen ? "center" : "right"}>
              {this.props.role}
            </Typography>
          </Grid>
        </Grid>
        <Typography
          variant='body1'
          component={Link}
          href={this.props.url}
          target='_blank'>
          {this.props.url}
        </Typography>
        <Typography variant='body1' component='ul' my={1} pl={0}>
          {this.props.description}
        </Typography>
      </Box>
    );
  }
}
