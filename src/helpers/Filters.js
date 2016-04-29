export default class Filters {
  constructor() {
    this.filters = [];
  }

  add(filter) {
    filter.id = this.filters.length;
    this.filters.push(filter);
    console.log(this.getFilters());
    this.count++;
    return this;
  }

  getFilters() {
    return this.filters;
  }

  getFilter(id) {
    return this.filters[id];
  }
};
