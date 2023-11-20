var correctNumber = Math.floor(Math.random() * 100) + 1;
var tries = 0;

function checkGuess() {

  var choice = document.getElementById("guessInput").value;

  if (isNaN(choice) || choice < 1 || choice > 100) {
    setMessage("Por favor, insira um número válido entre 1 e 100.");
    return;
  }

  tries++;

  choice = parseInt(choice);

  if (choice === correctNumber) {
    setMessage("Parabéns! Você acertou em " + tries + " tentativas.", "green");
  } else {
    // Dá dicas para o jogador
    var hint = choice < correctNumber ? "Maior" : "Menor";
    setMessage("Tente novamente. Dica: O número é " + hint + ".", "red");
  }
}

function setMessage(msg, color) {
  // Exibe a mensagem na interface do usuário
  var messageElement = document.getElementById("message");
  messageElement.textContent = msg;
  messageElement.style.color = color || "black";
}
