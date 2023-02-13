import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { mediaQuery } from "../AppContext";

type _Props = {
  jobTitle: string;
  company: string;
  location: string;
  date: string;
  children: React.ReactNode[];
  mediaQuery?: typeof mediaQuery;
};

export class ResumeExperience extends React.PureComponent<_Props> {
  constructor(props: _Props) {
    super(props);
  }

  get smallScreen(): boolean {
    return this.props.mediaQuery?.sm || false;
  }

  render() {
    return (
      <Box className='ResumeExperience keep-together'>
        <Grid container>
          <Grid item xs={this.smallScreen ? 12 : 4} whiteSpace='nowrap'>
            <Typography
              variant='h6'
              textAlign={this.smallScreen ? "center" : "left"}>
              {this.props.jobTitle}
            </Typography>
          </Grid>
          <Grid
            item
            xs={this.smallScreen ? 12 : 4}
            textAlign='center'
            whiteSpace='nowrap'>
            <Typography variant='h6' component='span'>
              {this.props.company}
            </Typography>
            {this.props.location && (
              <Typography component='span'>
                {", " + this.props.location}
              </Typography>
            )}
          </Grid>
          <Grid item xs={this.smallScreen ? 12 : 4} whiteSpace='nowrap'>
            <Typography textAlign={this.smallScreen ? "center" : "right"}>
              {this.props.date}
            </Typography>
          </Grid>
        </Grid>
        <Box component='ul' my={1} pl={2}>
          {this.props.children.map((child, index) => (
            <Box key={index} component='li' pl={1}>
              {child}
            </Box>
          ))}
        </Box>
      </Box>
    );
  }
}
