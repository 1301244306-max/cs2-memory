console.log("Script started");

let guessCount = 0;
let firstCard = "";

function flipCard(cardId) {
  if (firstCard == "") {
    // This is the first card clicked
    firstCard = cardId;
    
    let card = document.getElementById(cardId);
    card.style.color = "white";
    card.style.backgroundColor = "orange";
  }
  else if (cardId != firstCard) {
    // This is the second card clicked
    let card = document.getElementById(cardId);
    card.style.color = "white";
    card.style.backgroundColor = "orange";
    
    // Count this as a guess
    guessCount = guessCount + 1;

     // ADD THE MATCHING CODE HERE:
    // Get both cards to compare them
    let firstCardElement = document.getElementById(firstCard);
    let secondCardElement = card;
    
    // Check if they match
    if (firstCardElement.innerText == secondCardElement.innerText) {
        // They match! Change both to green
        firstCardElement.style.backgroundColor = "green";
        secondCardElement.style.backgroundColor = "green";
    }
   else {
    // They don't match - wait 1 second, then flip back
    setTimeout(function() {
        firstCardElement.style.backgroundColor = "darkred";
        firstCardElement.style.color = "darkred";
        secondCardElement.style.backgroundColor = "darkred";
        secondCardElement.style.color = "darkred";
    }, 1000);
}
    // Update the display
    let guessDisplay = document.getElementById("guessDisplay");
    guessDisplay.innerText = "Guesses: " + guessCount;

        
    // Reset so player can pick again
    firstCard = "";
  }
}
