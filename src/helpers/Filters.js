export default class Filters {
  constructor() {
    this.filters = [];
  }

  add(filter) {
    this.filters.push(filter);
    console.log(this.getFilters());
  }

  getFilters() {
    return this.filters;
  }
};
