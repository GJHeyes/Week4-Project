
const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Player', 'Computer'],
        datasets: [{
            label: 'Number of games won',
            data: [Math.floor(Math.random ()*7),
                Math.floor(Math.random ()*7)

            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
            ],
            borderColor: [
                'rgba(220, 99, 132, 0.5)',
                'rgba(54, 162, 205, 0.5)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 6 
            }
        }
    }
});