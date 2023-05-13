import { Box, Chip, Stack, Typography } from "@mui/material";
import React, { MouseEvent } from "react";
import interests from "../text/interests";
import { intersects } from "../utils";
type _Props = {
  highlightKeywords: string[];
  onClick: (e: MouseEvent, keyword: string[], highlighted: boolean) => void;
};

export class ImAlsoA extends React.PureComponent<_Props> {
  render() {
    return (
      <React.Fragment>
        <Typography variant='h6'>
          My expertise you may be interested in:
        </Typography>
        <Typography variant='caption'>
          Select all that apply. The CV is shown according to your selection.
        </Typography>
        <Stack direction='row' flexWrap='wrap' justifyItems='flex-start' mt={2}>
          {interests.map(({ title, keywords }, index) => {
            let highlighted =
              this.props.highlightKeywords.includes("*") ||
              intersects(keywords, this.props.highlightKeywords);
            return (
              <Box key={index} ml={0} pr={0.5} pt={0.5} style={{ margin: 0 }}>
                <Chip
                  sx={{ m: 0 }}
                  label={title}
                  color={highlighted ? "primary" : "default"}
                  onClick={(e) => this.props.onClick(e, keywords, highlighted)}
                />
              </Box>
            );
          })}
        </Stack>
      </React.Fragment>
    );
  }
}
