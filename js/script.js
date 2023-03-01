// Zmienne - stałe
const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');

// Funkcje
function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function getSelectByName(selectId) {
  console.log("selectId: "+selectId);
  switch (selectId) {
    case 1:
      return "kamień";
    case 2:
      return "papier";
    case 3:
      return "nożyce";
    default:
      console.log("WRONG INPUT");
      return null;
  }
}

function compare(playerOne, playerTwo) {
  // PlayerOne - gracz
  // PlayerTwo - komputer

  // remis
if ( playerOne == playerTwo) {
  return "draw"
};

  // Kamień x Papier = computerWin, czyli kompu (p2) wygrywa
if ( playerOne == 1 && playerTwo == 2) {
  return "computerWin"
};

 // Kamień x Nożyce = playerWin czyli gracz (p1) wygrywa
if ( playerOne == 1 && playerTwo == 3) {
  return "playerWin"
};

 // Papier x Kamień = playerWin, czyli gracz (p1) wygrywa
if ( playerOne == 2 && playerTwo == 1) {
  return "playerWin"
};

 // Papier x Nożyce = computerWin, czyli kompu (p2) wygrywa
if ( playerOne == 2 && playerTwo == 3) {
  return "computerWin"
};

 // Nożyce x Papier = playerWin, czyli gracz (p1) wygrywa
if ( playerOne == 3 && playerTwo == 2) {
  return "playerWin"
};

 // Nożyce x Kamien = computerWin, czyli kompu (p2) wygrywa
if ( playerOne == 3 && playerTwo == 1) {
  return "computerWin"
};

return null
}

// Podaje wynik rozgrywki
function result(buttonClickedId) {
  clearMessages();
  console.log("Clicked number no.: "+ buttonClickedId);
  let computerBet=Math.floor(Math.random() * 3 + 1);
  printMessage("Gracz wybrał "+getSelectByName(buttonClickedId) + " a ja "+ getSelectByName(computerBet));
  let compareResult = compare(buttonClickedId, computerBet);

  if (compare(buttonClickedId, computerBet) == "draw") {
    printMessage("Co oznacza, że jest remis.");
  } else if (compare(buttonClickedId, computerBet) == "playerWin") {
    printMessage("Co oznacza, że gracz wygrał.")
  } else if (compare(buttonClickedId, computerBet) == "computerWin") {
    printMessage("Co oznacza, że ja wygrało.");
  } else {
    printMessage("Co oznacza, że coś poszło nie tak...")
  }
}

// Main logic
buttonRock.addEventListener('click', function handleClick() {
 console.log('Rock button is clicked');
 buttonClickedId = 1;
 result(buttonClickedId);
});

buttonPaper.addEventListener('click', function handleClick() {
 console.log('Paper button is clicked');
 buttonClickedId = 2;
 result(buttonClickedId);
});

buttonScissors.addEventListener('click', function handleClick() {
 console.log('Scissors button is clicked');
 buttonClickedId = 3;
 result(buttonClickedId);
});


