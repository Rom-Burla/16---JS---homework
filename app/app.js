let myDiv = document.getElementById("root");
const arrShapes = ["speed", "dimond", "heart", "club"];
let arrCards = new Array();
let counter = 0;
let myBtn = document.createElement("button");
myBtn.textContent = "Click here to display your deck";
class Cards {
  constructor(num, suit, id) {
    (this.num = num), (this.suit = suit), (this.id = id);
  }
  printCard() {
    let card = document.createElement("div");
    card.className = "card";
    card.id = this.id;
    card.textContent = this.num + " " + this.suit;
    myDiv.appendChild(card);
  }
}

for (let i = 1; i < 14; i++) {
  arrShapes.forEach(() => {
    let oneCard = new Cards(
      Math.floor(Math.random() * (14 - 1) + 1),
      arrShapes[Math.floor(Math.random() * arrShapes.length)],
      arrCards.length
    );
    arrCards.push(oneCard);
  });
}

for (let r = 0; r < arrCards.length; r++) {
  for (let j = 0; j < arrCards.length; j++) {
    if (r !== j) {
      if (arrCards[r].num === arrCards[j].num) {
        if (arrCards[r].suit === arrCards[j].suit) {
          arrCards.splice(j, 1);
          counter++;
        }
      }
    }
  }
}

while (arrCards.length < 52) {
  let oneCard = new Cards(
    Math.floor(Math.random() * (14 - 1) + 1),
    arrShapes[Math.floor(Math.random() * arrShapes.length)],
    arrCards.length
  );

  arrCards.push(oneCard);

  for (let r = 0; r < arrCards.length; r++) {
    for (let j = 0; j < arrCards.length; j++) {
      if (r !== j) {
        if (arrCards[r].num === arrCards[j].num) {
          if (arrCards[r].suit === arrCards[j].suit) {
            arrCards.splice(j, 1);
            counter++;
          }
        }
      }
    }
  }
  if (arrCards.length === 52) {
    myBtn.addEventListener("click", () => {
      for (let i = 0; i < arrCards.length; i++) {
        arrCards[i].printCard();
      }

      myDiv.innerHTML += `<div class = "counter">iteritions: ${counter}</div>`;
      myBtn.style.display = "none";
    });
    break;
  }
}

myDiv.addEventListener("click", (event) => {
  if (event.target.className === "card") {
    event.target.className = "card-back";
    console.log("card");
  } else if (event.target.className === "card-back") {
    event.target.className = "card";
  }
});
console.log(arrCards);
