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
      <Stack spacing={3} {...this.topAttrs}>
        <Typography
          className='MuiTypography-h7'
          sx={{
            borderBottom: "2px solid black",
            textTransform: "uppercase",
          }}
          style={{
            marginLeft: "-0rem",
            paddingLeft: "0rem",
            marginRight: "-0rem",
            paddingRight: "0rem",
          }}>
          {this.props.title}
        </Typography>
        {this.props.children}
      </Stack>
    );
  }
}
