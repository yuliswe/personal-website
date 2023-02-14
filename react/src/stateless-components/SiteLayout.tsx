import { Box, Container, Paper, Stack } from "@mui/material";
import React from "react";
import { AppContext, AppContextType } from "../AppContext";

type _Props = {
  appBar: React.ReactNode;
  body: React.ReactNode;
};

export class SiteLayout extends React.PureComponent<_Props> {
  static contextType = AppContextType;
  get _context(): AppContext {
    return this.context as AppContext;
  }
  render() {
    return (
      <React.Fragment>
        <Container maxWidth='xl' sx={{ padding: 0, marginBottom: 0 }}>
          <Paper
            sx={{
              backgroundColor: "#ddd",
              marginTop: this._context.mediaQuery.xs ? 0 : 3,
            }}>
            {this.props.appBar}
            <Box
              component='main'
              my={this._context.mediaQuery.xs ? 0 : 10}
              mx={this._context.mediaQuery.xs ? 10 : 20}
              pb={10}>
              {this.props.body}
            </Box>
          </Paper>
        </Container>
      </React.Fragment>
    );
  }
}
