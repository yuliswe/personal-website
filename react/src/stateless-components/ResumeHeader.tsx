import { Box, Grid, Link, Stack, Typography } from "@mui/material";
import { QRCodeCanvas, QRCodeSVG } from "qrcode.react";
import React from "react";
import { mediaQuery } from "../AppContext";
type _Props = {
  jobTitle: string;
  mediaQuery?: typeof mediaQuery;
  websiteUrl: URL;
};
export class ResumeHeader extends React.Component<_Props> {
  get smallScreen(): boolean {
    return this.props.mediaQuery?.sm || false;
  }

  get companyUrlBare(): string {
    return (
      "https://" + this.props.websiteUrl.host + this.props.websiteUrl.pathname
    );
  }

  render() {
    return (
      <React.Fragment>
        <Stack>
          <Box ml={2}>
            <Typography
              variant='h6'
              sx={{
                textAlign: "center",
              }}>
              Yu Li
            </Typography>
            <Box>
              <Typography sx={{ textAlign: "center" }}>
                {this.props.jobTitle}
              </Typography>
            </Box>
          </Box>
          <Stack direction='row' justifyContent='center'>
            <Box display='flex' alignItems='center'>
              {[
                <Link
                  target='_blank'
                  underline='hover'
                  href='mailto:contact@yuli.se'>
                  contact@yuli.se
                </Link>,
                <Link
                  target='_blank'
                  underline='hover'
                  href='https://www.linkedin.com/in/yulise'>
                  LinkedIn
                </Link>,
                <Link target='_blank' underline='hover' href='https://yuli.se'>
                  CV
                </Link>,
                <Typography>Waterloo, Canada</Typography>,
              ].map((x, i) => (
                <>
                  {i > 0 && <Box mx={1}>&#x2022;</Box>} {x}
                </>
              ))}
            </Box>
          </Stack>
        </Stack>
      </React.Fragment>
    );
  }
}
