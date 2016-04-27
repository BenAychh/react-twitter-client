class limitedSizeArray {
  constructor (maxSize) {
    this.maxSize = maxSize;
    this.elementArray = [];
  }

  add(element) {
    this.elementArray.unshift(element);
    while (this.elementArray.length > this.maxSize) {
      this.elementArray.pop();
    }

    return this;
  }

  getArray() {
    return this.elementArray;
  }
}

export default limitedSizeArray;
