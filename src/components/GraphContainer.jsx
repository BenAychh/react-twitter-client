import React from 'react';
import { Component } from 'react';

class GraphContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="col-md-7 graph-container">
        <GeoMap />
        <BarGraph />
        <CandleGraph />
      </div>
    )
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
    )
  }  
}

class BarGraph extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="col-md-6 bar-graph">
        <h1 className="center">BarGraph</h1>
      </div>
    )
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