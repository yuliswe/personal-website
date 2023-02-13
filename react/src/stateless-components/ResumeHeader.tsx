import { Box, Grid, Link, Stack, Typography } from "@mui/material";
import { QRCodeCanvas, QRCodeSVG } from "qrcode.react";
import React from "react";
import { mediaQuery } from "../AppContext";
type _Props = {
  jobTitle: string;
  companyShortCode: string;
  mediaQuery?: typeof mediaQuery;
};
export class ResumeHeader extends React.Component<_Props> {
  constructor(props: _Props) {
    super(props);
  }

  get smallScreen(): boolean {
    return this.props.mediaQuery?.sm || false;
  }

  render() {
    return (
      <React.Fragment>
        <Grid
          container
          justifyContent='space-between'
          spacing={this.smallScreen ? 10 : 0}>
          <Grid
            item
            xs={this.smallScreen ? 12 : 3}
            textAlign={this.smallScreen ? "center" : "left"}>
            <Typography variant='h6'>Current Address</Typography>
            <Typography>453 Bronco Cres</Typography>
            <Typography>Waterloo, ON, N2K 4L1</Typography>
          </Grid>
          <Grid item xs={this.smallScreen ? 12 : 3} flexGrow='1'>
            <Box ml={2}>
              <Typography
                variant='h6'
                sx={{
                  textAlign: "center",
                }}>
                Yu Li
              </Typography>
              <Typography sx={{ textAlign: "center" }}>
                {this.props.jobTitle}
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={this.smallScreen ? 12 : 3}
            textAlign={this.smallScreen ? "center" : "left"}>
            <Stack
              direction={this.smallScreen ? "column" : "row"}
              spacing={3}
              alignItems='center'
              justifyContent={this.smallScreen ? "center" : "left"}>
              <QRCodeCanvas
                size={50}
                value={`https://${this.props.companyShortCode}.yuSE.dev`}></QRCodeCanvas>
              <Box>
                <Typography variant='h6'>Contact</Typography>
                <Typography>ylilarry@gmail.com</Typography>
                <Typography>(226) 978-5620</Typography>
                <Typography>{this.props.companyShortCode}.yuSE.dev</Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
