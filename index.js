/**
 * Copyright 2018 Huge Inc
 * Released under the MIT license
 * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
 */

const barChart = document.getElementById('barchart');
const pieChart = document.getElementById('piechart');

const barData = {
  labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ],
  datasets: [
    {
      label: 'My First Dataset',
      data: [ 65, 59, 80, 81, 56, 55, 40 ],
      fill: false,
      backgroundColor:  'rgba(255, 99, 132, 0.2)' ,
      borderColor:  'rgb(255, 99, 132)' ,
      borderWidth: 1
    },
    {
      label: 'My Second Dataset',
      data: [ 65, 59, 80, 81, 56, 55, 40 ],
      fill: false,
      backgroundColor:  'rgba(255, 159, 64, 0.2)' ,
      borderColor: 'rgb(255, 159, 64)' ,
      borderWidth: 1
    }
  ]
};

const barOptions = {
  scales: { yAxes: [ { ticks: { beginAtZero: true } } ] } // Start at 0, if not, starts at less exactly escalable number (40 in this case)
};

new Chart(barChart, {
  type: 'bar',
  data: barData,
  options: barOptions
});
