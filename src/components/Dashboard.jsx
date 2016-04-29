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

class AddFilterForm extends Component {
  state = {
    filter: this.props.filter,
  };

  constructor(props) {
    super(props);
    this.handleKeywordChange = this.handleKeywordChange.bind(this);
  }

  handleKeywordChange (e) {
    var temp = this.state.filter;
    temp.keywords = e.target.value;
    this.setState({
      filter: temp,
    });
  }

  render() {
    return (
      <form className="form-inline" onSubmit={this.props.onSubmit}>
        <label className="form-control" htmlFor="keywords">Keywords (Comma Separated)</label>
        <input type="text" className="form-control" value={this.state.filter.keywords}
          placeholder="Clinton, Trump"
          onChange={this.handleKeywordChange}/>
        <input type="submit" className="form-control" value="Add Filter" />
      </form>
    );
  }
}

class Filters extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="filters">
      <legend className="center top-margin"><h3>Filters</h3></legend>
      <ul>
        {this.props.filters.getFilters().map((filter, i) =>
            <SingleFilter key={filter.id} filterClick={this.props.filterClick} twitterSocketkey={filter.id} filter={filter} />
        )}
      </ul>
      </div>
    );
  }
}

class SingleFilter extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.filterClick(this.props.filter.id);
  }

  render() {
    return (
        <li id={'filter_ ' + this.props.filter.id} onClick={this.handleClick}>
            Keywords: {this.props.filter.keywords}
        </li>
    );
  }
}

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: this.props.filters,
      filter: {
        keywords: '',
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.filterClick = this.filterClick.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    var keywords = this.state.filter.keywords.trim();
    if (!keywords) {
      return;
    }

    var filterCopy = JSON.parse(JSON.stringify(this.state.filter));
    this.state.filter.keywords = '';
    this.setState({
      filters: this.state.filters.add(filterCopy),
    });
  }

  filterClick(filterId) {
    this.props.twitterSocket.setFilters(this.state.filters.getFilter(filterId));
  }

  render() {
    return (
      <div className="col-md-3 dashboard border-right">
        <h1 className="center">Fitter<br />DashBoard</h1>
        <AddFilterForm filters={this.state.filters} onSubmit={this.handleSubmit} filter={this.state.filter}/>
        <Filters filterClick={this.filterClick} filters={this.state.filters} change/>
      </div>
    );
  }
}

export default DashBoard;
