import { Image } from "@mui/icons-material";
import { Box, Card, CardMedia, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import photo from "../photo.jpg";
import { AppContextType, AppContext } from "../AppContext";
export class IntroduceSelf extends React.Component {
  static contextType = AppContextType;

  get _context(): AppContext {
    return this.context as AppContext;
  }
  render() {
    return (
      <React.Fragment>
        <Grid
          container
          spacing={10}
          direction={this._context.mediaQuery.xs ? "column-reverse" : "row"}>
          <Grid item xs={12} sm={6} md={5}>
            <Card sx={{ flexShrink: 0 }}>
              <CardMedia
                style={{
                  width: "100%",
                }}
                component='img'
                src={photo}
                alt='my photo'></CardMedia>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={7}>
            <Typography variant='h3'>Yu here!</Typography>
            <Typography variant='subtitle1'>
              Fuellled by a passion for designing and compiling products, I have
              a deep desire to excel and continuously improve in my work. Learn
              more about my journey below.
            </Typography>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
