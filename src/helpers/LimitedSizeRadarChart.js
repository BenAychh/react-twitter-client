class LimitedSizeRadarChart {
  constructor(size) {
    this.maxSize = size;
    this.gradeCount = {
      0: 0,
      1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0,
      7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0,
    };
    this.gradeArray = [];
    this.gradeBars = [];
  }

  add(grade) {
    this.gradeArray.push(grade);
    this.gradeCount[grade]++;
    while (this.gradeArray.length > this.maxSize) {
      this.gradeCount[this.gradeArray.shift()]--;
    }

    this.gradeBars = Object.keys(this.gradeCount).reduce((array, key) => {
      array.push(this.gradeCount[key]);
      return array;
    }, []);
    return this;
  }

  getChartObject() {
    return {
      labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      datasets: [
        {
          label: 'Grade Analysis',
          lineTension: 0.3,
          fillColor: 'rgba(75,192,192,0.4)',
          strokeColor: 'rgba(75,192,192,1)',
          data: this.gradeBars,
        },
      ],
    };
  }
}

export default LimitedSizeRadarChart;
