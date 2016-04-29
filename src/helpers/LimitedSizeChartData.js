class LimitedSizeChartData {
  constructor(size) {
    this.maxSize = size;
    this.sentimentArray = [];
  }

  add(element) {
    this.sentimentArray.push(element);
    while (this.sentimentArray.length > this.maxSize) {
      this.sentimentArray.shift();
    }

    return this;
  }

  getChartObject() {
    return {
      labels: this.labelMaker(),
      datasets: [
        {
          label: 'Grade Analysis',
          fill: false,
          lineTension: 0.3,
          fillColor: 'rgba(75,192,192,0.4)',
          strokeColor: 'rgba(75,192,192,1)',
          data: this.sentimentArray,
        },
      ],
    };
  }

  labelMaker() {
    var length = this.sentimentArray.length;
    switch (true) {
      case length < 10:
        return this.generatePattern(1, length + 1, 1);
      case length < 20:
        return this.generatePattern(1, 20, 1);
      case length < 40:
        return this.generatePattern(1, 40, 1);
      default:
        return this.generatePattern(1, 60, 1);
    }
  }

  showLabelNumber() {
    var length = this.sentimentArray.length;
    switch (true) {
      case length < 10:
        return length + 1;
      default:
        return 10;
    }
  }

  generatePattern(min, max, step) {
    var tempArray = [];
    for (var i = min; i < max; i += step) {
      tempArray.push(i);
    }

    tempArray.push(max);
    return tempArray;
  }
}

export default LimitedSizeChartData;
