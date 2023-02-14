import { Image } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { keywordShouldShow } from "../utils";
import { MyStory } from "../text/stories";

type _Props = {
  stories: MyStory[];
  urlKeywords: string[];
};
export class MyStories extends React.PureComponent<_Props> {
  //   constructor(props: { stories: MyStoriesData[] }) {
  //     super(props);
  //   }

  render() {
    return (
      <Stack spacing={3}>
        <Typography variant='h4'>My Stories With</Typography>
        {this.props.stories.map(
          (story, index) =>
            keywordShouldShow(this.props.urlKeywords, story.keywords) && (
              <Box key={index}>
                <Typography variant='h5' mb={1}>
                  {story.title}
                </Typography>
                <Typography variant='body2'>{story.text}</Typography>
              </Box>
            )
        )}
      </Stack>
    );
  }
}
