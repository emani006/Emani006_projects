const moment = require ('moment');
const chartjs = require ('chart.js');
let cityTimezones = require('city-timezones');
//const myModule = require('./my.js');

// вывод актуальной даты
let weekDay = moment().format('llll');
document.getElementById('timeline').innerHTML = weekDay;

// вывод населения по городам мира
    document.getElementById('findInfo').addEventListener('click', () => {
        document.getElementById('out').innerHTML = '';
        let cityName = document.getElementById('cityName').value;
        let cityLookup = cityTimezones.lookupViaCity(cityName);
        if (cityLookup[0] == null) {
            document.getElementById('out').innerHTML = 'Check the city name';
        } else {
        document.getElementById('out').innerHTML = 'Population of ' + cityLookup[0].city + `(${cityLookup[0].country})` + ':  ' + cityLookup[0].pop + `<br>`;
        }
        console.log(cityLookup);
    })

// bar chart
const ctx = document.getElementById('myChart');
    new Chart(ctx, {
        type: 'bar',
        data: {
        labels: ['April', 'May', 'June', 'July', 'August', 'September'],
        datasets: [{
            label: 'Walking Hours',
            data: [4, 6, 10, 12, 11, 7],
            borderWidth: 1,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(201, 203, 207)',
                'rgb(115, 30, 195)'
            ],
        }]
        },
        options: {
        scales: {
            y: {
            beginAtZero: true
            }
        }
        }
    });

// polararea chart
const ctx1 = document.getElementById('myChart1');
    new Chart(ctx1, {
        type: 'polarArea',
        data: {
        labels: ['2019', '2020', '2021', '2022'],
        datasets: [{
            label: 'km per year',
            data: [36, 25, 18, 32],
            borderWidth: 1,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
        }]
        },
    });

// dounut chart
const ctx2 = document.getElementById('myChart2');
    new Chart(ctx2, {
        type: 'doughnut',
        data: {
            labels: [
                'Morning',
                'Afternoon',
                'Evening',
                'Night'
            ],
            datasets: [{
                label: 'steps per day time',
                data: [300, 1000, 800, 400],
                backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgba(75, 192, 192, 0.2)'
                ],
                hoverOffset: 4
            }]
        },
    });
