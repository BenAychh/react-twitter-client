import React from 'react';
import { Component } from 'react';

class FlexBoxContainer extends Component {
    constructor() {
    super();
  }

  render() {
    return (
      <div className="flex-box-container">
        <FlexBoxBox />
      </div>
    )
  }
}

class FlexBoxBox extends Component {
    constructor() {
    super();
  }

  render() {
    return (
      <div className="flex-box-box">
        <h1 className="center">New Filter</h1>  
        <FilterListOptions />
      </div>
    )
  }
}

class FilterListOptions extends Component {
    constructor() {
    super();
  }

  render() {
    return (
      <div className="filter-list-options">
        <ul>
          <FilterList />
        </ul> 
      </div>
    )
  }
}

class FilterList extends Component {
    constructor() {
    super();
  }

  render() {
    return (
      <div className="filter-list">
        <li>Opt one</li>
        <li>Opt two</li>
        <li>Opt three</li>
      </div>
    )
  }
}


class InitialView extends Component {
    constructor() {
    super();
  }

  render() {
    return (
      <div className="col-md-9 initial-view">
        <FlexBoxContainer />
      </div>
    )
  }
}

export default InitialView;