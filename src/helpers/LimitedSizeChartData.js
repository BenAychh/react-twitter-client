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
      responsive: true,
      showXLabels: this.showLabelNumber(),
      datasets: [
        {
          label: 'Sentiment Analysis',
          fill: false,
          lineTension: 0.3,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          data: this.sentimentArray,
          yAxisID: 'y-axis-0',
        },
      ],
    };
  }

  labelMaker() {
    var length = this.sentimentArray.length;
    switch (true) {
      case length < 10:
        return this.generatePattern(0, length + 1, 1);
      case length < 20:
        return this.generatePattern(0, 20, 1);
      case length < 40:
        return this.generatePattern(0, 40, 1);
      default:
        return this.generatePattern(0, 60, 1);
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
