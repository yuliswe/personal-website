import { Typography } from "@mui/material";
import React from "react";

export class MyCareerSoFar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Typography variant='h4'>My Career So Far</Typography>
        <Typography variant='body2'>
          Always up for trying out and studying new technologies, I have worked
          in different areas of software engineering since 2012, including web,
          mobile development and database engineering. I have been employed in
          technical roles at SAP Canada, University of Waterloo, Evertz
          Microsystems, as well as an early-stage startup.
        </Typography>
      </React.Fragment>
    );
  }
}
