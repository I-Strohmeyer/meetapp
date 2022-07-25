import React, { Component } from "react";
import { Scatter } from "react-chartjs-2";

export class Chart extends Component {
  render() {
    return <Scatter options={{}} data={this.props.data} />;
  }
}
