let playerScore = 0
let computerScore = 0
function playGame(userChoise){
    const choices = ['piedra', 'papel', 'tijera']
    const computerChoise = choices[Math.floor(Math.random() * choices.length)]
    let result = ''
    switch (userChoise) {
        case 'piedra':
            switch (computerChoise) {
                case 'piedra':
                    result = 'Empate!';
                    break;
                case 'papel':
                    result = 'Perdiste!';
                    computerScore++
                    break;
                case 'tijera':
                    result = 'Ganaste!';
                    playerScore++
                    break;
            }
            break;
        case  'tijera':
            switch (computerChoise) {
                case 'piedra':
                    result = 'Perdiste!';
                    computerScore++
                    break;
                case 'papel':
                    result = 'Ganaste!';
                    playerScore++
                    break;
                case 'tijera':
                    result = 'Empate!';
                    break;
            }
            break;
        case 'papel':
            switch(computerChoise) {
                case 'piedra':
                    result = 'Ganaste!';
                    playerScore++
                    break;
                case 'papel':
                    result = 'Empate!';
                    break;
                case 'tijera':
                    result = 'Perdiste!';
                    computerScore++
                    break;
                }
             break;
        
        default:
                let opcionInvalida = "Opción inválida.";
        }
    document.getElementById("result").textContent = 
        `Elegiste ${userChoise}, la CPU eligió ${computerChoise}. ${result}`;

    document.getElementById("score").textContent = 
        `Jugador: ${playerScore} || CPU: ${computerScore}`;
    endGame();
   
   
    }


function endGame() {
    if (computerScore === 3 || playerScore === 3) {
        document.getElementById("result").textContent =
            `El juego ha terminado. Ganador: ${playerScore > computerScore ? 'Jugador' : 'CPU'}`;
            document.getElementById("score").textContent = 
            `Jugador: ${playerScore} || CPU: ${computerScore}`;

        
        disableChoiceButtons(true);
}
}
function resetGame(){
    playerScore = 0
    computerScore = 0
    document.getElementById("score").textContent = 
        `Jugador: 0 || CPU: 0`;
    document.getElementById("result").textContent = 
        "¡Haz tu elección!";
    endGame();
    
    disableChoiceButtons(false);
}

function disableChoiceButtons(disable) {
    const buttons = document.querySelectorAll('.choices button');
    buttons.forEach(button => {
        button.disabled = disable;
    });
}

