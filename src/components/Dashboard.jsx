import React from 'react';
import { Component } from 'react';

class AddFilterButton extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="center">
      <button className="btn btn-success">Add Filter</button>
      </div>
    )
  }
}

class Filters extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="filters">
      <legend className="center top-margin"><h3>Filters</h3></legend>
      <ul>
        <SingleFilter />
      </ul>
      </div>
    )
  }
}

class SingleFilter extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <li>Filter One</li>
        <li>Filter Two</li>
        <li>Filter Three</li>
      </div>
    )
  }
}

class DashBoard extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="col-md-3 dashboard border-right">
        <h1 className="center">Fitter<br />DashBoard</h1>
        <AddFilterButton />
        <Filters />
      </div>
    )
  }
}

export default DashBoard;