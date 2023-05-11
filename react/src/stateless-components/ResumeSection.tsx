import { Box, Stack, Typography } from "@mui/material";
import React, { HTMLAttributes } from "react";

type _Props = {
  title: string;
  children: React.ReactNode;
} & HTMLAttributes<HTMLElement>;

export class ResumeSection extends React.PureComponent<_Props> {
  topAttrs: HTMLAttributes<HTMLElement>;
  constructor(props: _Props) {
    super(props);
    let { title, children, ...topAttrs } = props;
    this.topAttrs = topAttrs;
  }

  render() {
    return (
      <Box>
        <Typography
          variant='h6'
          mb={1}
          sx={{
            borderBottom: "2px solid black",
            textTransform: "uppercase",
          }}
          style={{
            fontSize: "0.9em",
            marginLeft: "-0rem",
            paddingLeft: "0rem",
            marginRight: "-0rem",
            paddingRight: "0rem",
          }}>
          {this.props.title}
        </Typography>
        <Stack spacing={1} {...this.topAttrs}>
          {this.props.children}
        </Stack>
      </Box>
    );
  }
}
