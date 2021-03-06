/**
 * Copyright 2018 Huge Inc
 * Released under the MIT license
 * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
 */

const basicBarChart = document.getElementById('barchart-basic').getContext('2d');
const completeBarChart = document.getElementById('barchart-complete').getContext('2d');

const doughnutChart = document.getElementById('doughnutchart').getContext('2d');
const doughnutChartMobile = document.getElementById('doughnutchart-mobile').getContext('2d');

// Global default setup
Chart.defaults.global.legend.labels.usePointStyle = true;

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
    display: true,
    position: 'top'
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
      data: [ 10, 50, 60, 90, 95 ],
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
  cutoutPercentage: 40
};

// Define a plugin to provide data labels
const pieLabelingPlugin = {
  id: 'pieLabeling',
  afterDatasetsDraw: chart => {
    const ctx = chart.ctx;
    const [ dataset, i = 0 ] = chart.data.datasets; // We always have 1 dataset because is a doughnut chart
    const meta = chart.getDatasetMeta(i);
    const sumData = meta.total;
    // Doughnut Font Setup
    ctx.fillStyle = '#ffff';
    const fontSize = 16;
    const fontStyle = 'normal';
    const fontFamily = 'Helvetica Neue';
    ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
    // Make sure alignment settings are correct
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const padding = 5;

    meta.data.forEach((element, index) => {
      // Get the doughnut percentage value
      const currentValue = dataset.data[index];
      const percentage = parseFloat((currentValue / sumData * 100).toFixed(1));
      const dataString = `${percentage}%`;

      const position = element.tooltipPosition();
      if (!element.hidden) {
        ctx.fillText(dataString, position.x, position.y - fontSize / 2 - padding);
      }
    });
  }
};

const doughnutInstance = new Chart(doughnutChart, {
  type: 'doughnut',
  data: doughnutData,
  options: { ...doughnutOptions },
  plugins: [ pieLabelingPlugin ]
});

// document.getElementById('right-legend').innerHTML = doughnutInstance.generateLegend();

const doughnutMobileInstance = new Chart(doughnutChartMobile, {
  type: 'doughnut',
  data: doughnutData,
  options: { ...doughnutOptions, legend: { display: false } }
});

doughnutMobileInstance.options.legend.position = 'bottom';
doughnutMobileInstance.update();
document.getElementById('bottom-legend').innerHTML = doughnutMobileInstance.generateLegend();
