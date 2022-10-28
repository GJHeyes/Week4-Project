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
                'rgba(242, 48, 48, 1)',
                'rgba(54, 162, 235,1)'
                
                
            ],
            borderColor: [
                'rgba(232, 9, 9, 1)',
                'rgba(38, 108, 222, 1)'
                
            ],
            borderWidth: 2
            
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

