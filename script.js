var numeroCorreto = Math.floor(Math.random() * 100) + 1;
var tentativas = 0;

function checkGuess() {

  var palpite = document.getElementById("guessInput").value;

  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    setMessage("Por favor, insira um número válido entre 1 e 100.");
    return;
  }

  tentativas++;

  palpite = parseInt(palpite);

  if (palpite === numeroCorreto) {
    setMessage("Parabéns! Você acertou em " + tentativas + " tentativas.", "green");
  } else {
    // Dá dicas para o jogador
    var dica = palpite < numeroCorreto ? "Maior" : "Menor";
    setMessage("Tente novamente. Dica: O número é " + dica + ".", "red");
  }
}

function setMessage(msg, color) {
  // Exibe a mensagem na interface do usuário
  var messageElement = document.getElementById("message");
  messageElement.textContent = msg;
  messageElement.style.color = color || "black";
}