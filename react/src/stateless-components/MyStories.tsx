import { Image } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

export type MyStoriesData = {
  title: string;
  text: string;
};

type _Props = {
  stories: MyStoriesData[];
};
export class MyStories extends React.PureComponent<_Props> {
  //   constructor(props: { stories: MyStoriesData[] }) {
  //     super(props);
  //   }

  render() {
    return (
      <Stack spacing={3}>
        <Typography variant='h4'>My Stories With</Typography>
        {this.props.stories.map((story, index) => (
          <Box key={index}>
            <Typography variant='h5' mb={1}>
              {story.title}
            </Typography>
            <Typography variant='body2'>{story.text}</Typography>
          </Box>
        ))}
      </Stack>
    );
  }
}
