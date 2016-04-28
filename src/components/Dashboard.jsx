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
    );
  }
}

var AddFilterForm = React.createClass({
  getInitialState: function () {
    return {
      keywords: '',
    };
  },

  handleKeywordChange: function (e) {
    this.setState({ keywords: e.target.value });
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var keywords = this.state.keywords.trim();
    if (!keywords) {
      return;
    }

    this.props.filters.add({
      keywords: keywords,
    });
    this.setState({ keywords: '' });
  },

  render() {
    return (
      <form class="form-inline" onSubmit={this.handleSubmit}>
        <label className="form-control" htmlFor="keywords">Keywords (Comma Separated)</label>
        <input type="text" className="form-control" value={this.state.keywords}
          placeholder="Clinton, Trump"
          onChange={this.handleKeywordChange}/>
        <input type="submit" className="form-control" value="Add Filter" />
      </form>
    );
  },
});

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
    );
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
    );
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
        <AddFilterForm />
        <Filters />
      </div>
    );
  }
}

export default DashBoard;
