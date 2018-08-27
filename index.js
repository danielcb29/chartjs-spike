/**
 * Copyright 2018 Huge Inc
 * Released under the MIT license
 * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
 */

const basicBarChart = document.getElementById('barchart-basic');
const completeBarChart = document.getElementById('barchart-complete');

const doughnutChart = document.getElementById('doughnutchart');

// Basic Bar Chart
const basicBarData = {
  labels: [ 'January January', 'February®', 'March', 'March', 'March', 'March', 'March' ],
  datasets: [
    {
      label: '',
      data: [ 65, 59, 80, 81, 56, 55, 40 ],
      backgroundColor: 'rgba(80, 50, 145, 100)'
    }
  ]
};

const basicBarOptions = {
  layout: {
    padding: {
      left: 250,
      right: 250,
      top: 100,
      bottom: 100
    }
  },
  legend: {
    display: false
  },
  tooltips: {
    enabled: false
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        }
      }
    ],
    xAxes: [
      {
        gridLines: {
          display: false
        },
        barPercentage: 0.3,
        ticks: {
          callback: function(value, index, values) {
            return value.split(' ');
          }
        }
      }
    ]
  }
};

new Chart(basicBarChart, {
  type: 'bar',
  data: basicBarData,
  options: basicBarOptions
});

// Complete Bar Chart

const completeBarData = {
  labels: [ 'January January', 'February®', 'March', 'April', 'May', 'June', 'July' ],
  datasets: [
    {
      label: '2015',
      data: [ 65, 59, 80, 81, 56, 55, 40 ],
      backgroundColor: 'rgba(29, 190, 205, 100)'
    },
    {
      label: '2016',
      data: [ 55, 29, 83, 10, 66, 15, 40 ],
      backgroundColor: 'rgba(80, 50, 145, 100)'
    }
  ]
};

const completeBarOptions = {
  legend: {
    position: 'top',
    fullWidth: false
  },
  tooltips: {
    mode: 'index',
    intersect: true,
    cornerRadius: 2,
    yAlign: 'bottom',
    caretSize: 8,
    xPadding: 20,
    yPadding: 15,
    bodySpacing: 12,
    titleMarginBottom: 15
  },
  layout: {
    padding: {
      left: 250,
      right: 250,
      top: 100,
      bottom: 100
    }
  },
  scales: {
    yAxes: [ { ticks: { beginAtZero: true } } ],
    xAxes: [
      {
        gridLines: {
          display: false
        },
        barPercentage: 1,
        ticks: {
          callback: function(value, index, values) {
            return value.split(' ');
          }
        }
      }
    ]
  }
};

new Chart(completeBarChart, {
  type: 'bar',
  data: completeBarData,
  options: completeBarOptions
});

// Doughnut Chart

const doughnutData = {
  datasets: [
    {
      data: [ 10, 20, 30, 40, 50 ],
      backgroundColor: [ '#FFC832', '#503291', '#EB3C96', '#0F69AF', '#96D7D2' ],
      borderWidth: [ 0, 0, 0, 0, 0 ]
    }
  ],
  labels: [ 'Europe', 'Asia Pacific', 'Middle East & Africa', 'Latin America', 'North America' ]
};

const doughnutOptions = {
  legend: {
    position: 'right',
    fullWidth: false
  },
  tooltips: {
    enabled: false
  },
};

const doughnutInstance = new Chart(doughnutChart, {
  type: 'doughnut',
  data: doughnutData,
  options: doughnutOptions
});
