import React from 'react';
import { Component } from 'react';
import moment from 'moment';
import Graph from 'react-chartjs';

class GraphContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container graph-container">
        <div>
          <h3 style={{color: 'white'}}>Grade-Level of last 20 tweets</h3>
          <Graph.Line data={this.props.graphData} width="600" height="300"/>
        </div>
        <div style={{overflow: 'hidden'}}>
          <h3 style={{color: 'white'}}>Frequency Distribution by Grade Level (last 1000 Tweets)</h3>
          <Graph.Bar data={this.props.radarData} width="1200" height="300"/>
        </div>
      </div>
    );
  }
}

export default GraphContainer;
