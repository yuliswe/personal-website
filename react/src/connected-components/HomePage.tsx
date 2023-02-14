import React from "react";
import { connect } from "react-redux";
import { AppBar } from "../stateless-components/AppBar";
import { ResumePage } from "./ResumePage";
import { SiteLayout } from "../stateless-components/SiteLayout";
import { HomeAppState } from "../states/HomeAppState";
import { RootAppState } from "../states/RootAppState";

type _State = {};

type _Props = {
  homeAppState: HomeAppState;
};

class _Home extends React.Component<_Props, _State> {
  constructor(props: _Props) {
    super(props);
    this.state = {};
  }

  render() {
    return <SiteLayout appBar={<AppBar />} body={<ResumePage></ResumePage>} />;
  }
}

export const HomePage = connect<_Props, {}, {}, RootAppState>(
  (rootAppState: RootAppState) => ({
    homeAppState: rootAppState.home,
  })
)(_Home);
