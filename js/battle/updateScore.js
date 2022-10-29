function updateScore(){
    playerChart.config.data.datasets[0].data[0] = playerScore 
    computerChart.config.data.datasets[0].data[0] = computerScore 
    playerChart.update()
    computerChart.update()
}