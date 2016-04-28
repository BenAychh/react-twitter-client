import React from 'react';
import { Component } from 'react';
import moment from 'moment';
import Graph from 'react-chartjs';
var LineGraph = Graph.Line;

class GraphContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="col-md-6 graph-container">
        <BarGraph data={this.props.data}/>
      </div>
    );
  }
}

class GeoMap extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="col-md-12 geo-map half">
        <h1 className="center">US Map</h1>
      </div>
    );
  }
}

class BarGraph extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="col-md-6 bar-graph">
        <Graph.Line data={this.props.data} className="col-md-12"/>
      </div>
    );
  }
}

class CandleGraph extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="col-md-6 candle-graph">
        <h1 className="center">CandleGraph</h1>
      </div>
    )
  }
}

export default GraphContainer;
