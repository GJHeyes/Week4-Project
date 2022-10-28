const c0mputer = document.getElementById('computerChart').getContext('2d');
const play3r = document.getElementById('playerChart').getContext('2d');

const computerChart = new Chart(c0mputer, {
    type: 'bar',
    data: {
        labels: [''],
        datasets: [{
            label: "test",
            data: [ computerScore

            ],
            backgroundColor: [
                'rgba(49, 65, 74,1)',
            ],
            borderColor: [
                'rgba(220, 99, 132, 0.0)',
            ],
            borderWidth: 1,
        }]
    },
    options: {
        tooltip: {
            enabled: false // <-- this option disables tooltips
        },
        plugins: {
            datalabels: {
                display: function(context) {
                   return context.dataset.data[context.dataIndex] !== 0; // or >= 1 or ...
                }
             },
            legend: {
              display: false
            }
        },
        scales: {
            x:{
                ticks: {
                    display: false,
                },
                grid:{
                    drawBorder: false,
                    color: 'rgba(0, 0, 0, 0)',
                    display: false,
                },
                gridLines: {
                    display:false
                },
            },
            y: {
                beginAtZero: true,
                max: 6 ,
                ticks: {
                    display: false,
                },
                grid:{
                    drawBorder: false,
                    display: false,
                },
                gridLines: {
                    display:false
                },
            },
        }
    },
    //plugins: [ChartDataLabels]
});

const playerChart = new Chart(play3r, {
    type: 'bar',
    data: {
        labels: [''],
        datasets: [{
            label: "test",
            data: [ playerScore

            ],
            backgroundColor: [
                'rgba(41, 65, 106,1)',
            ],
            borderColor: [
                'rgba(54, 162, 205, 0.0)',
            ],
            borderWidth: 1,
            rotation:180,
        }]
    },
    options: {
        plugins: {
            tooltip: {
                enabled: false // <-- this option disables tooltips
            },
            datalabels: {
                display: function(context) {
                   return context.dataset.data[context.dataIndex] !== 0; // or >= 1 or ...
                }
             },
            legend: {
              display: false
            }
        },
        scales: {
            x:{
                ticks: {
                    display: false,
                },
                grid:{
                    display: false,
                    drawBorder: false,
                },
                gridLines: {
                    display:false
                },
            },
            y: {
                beginAtZero: true,
                max: 6 ,
                ticks: {
                    display: false,
                },
                grid:{
                    display: false,
                    drawBorder: false,
                },
                gridLines: {
                    display:false
                },
            },
            
        }
    },
    //plugins: [ChartDataLabels]
});

function updateScore(){
    playerChart.config.data.datasets[0].data[0] = playerScore 
    computerChart.config.data.datasets[0].data[0] = computerScore 
    playerChart.update()
    computerChart.update()
}

