import { Box, Typography } from "@mui/material";
import React from "react";

type _Props = {
  title: string;
  text: string;
};

export class WhyConsiderMe extends React.PureComponent<_Props> {
  render() {
    return (
      <Box>
        <Typography variant='h4'>{this.props.title}</Typography>
        <Typography variant='body2'>{this.props.text}</Typography>
      </Box>
    );
  }
}
