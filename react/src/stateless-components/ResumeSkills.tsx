import { Box, Grid, Typography } from "@mui/material";
import React from "react";

type _Props = {
  title: string;
  children: React.ReactNode[];
};

export class ResumeSkills extends React.PureComponent<_Props> {
  constructor(props: _Props) {
    super(props);
  }

  render() {
    return (
      <Box className='ResumeSkills keep-together'>
        <Typography variant='h6' gutterBottom={true}>
          {this.props.title}
        </Typography>
        <Grid container>
          {this.props.children.map((child, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box pl={2} component='ul' my={0}>
                <Box
                  component='li'
                  pl={1}
                  sx={{
                    listStylePosition: "outside",
                  }}>
                  {child}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }
}
