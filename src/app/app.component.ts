import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent {
  constructor() {
    this.drawCardsForDealer();
    this.drawCardsForDealer();
  }

  title = "blackJack";

  dealerSum = 0;
  playerSum = 0;

  showDealersCards: boolean = false;

  dealerCards = [];
  userCards = [];

  randomNum = 0;

  cardDeck = [
    // Spades
    { cardName: "A", type: "Spades", value1: 1, value2: 11, imgPath: "" },
    { cardName: "K", type: "Spades", value1: 10, value2: 0 },
    { cardName: "Q", type: "Spades", value1: 10, value2: 0 },
    { cardName: "J", type: "Spades", value1: 10, value2: 0 },
    { cardName: "10", type: "Spades", value1: 10, value2: 0 },
    { cardName: "9", type: "Spades", value1: 9, value2: 0 },
    { cardName: "8", type: "Spades", value1: 8, value2: 0 },
    { cardName: "7", type: "Spades", value1: 7, value2: 0 },
    { cardName: "6", type: "Spades", value1: 6, value2: 0 },
    { cardName: "5", type: "Spades", value1: 5, value2: 0 },
    { cardName: "4", type: "Spades", value1: 4, value2: 0 },
    { cardName: "3", type: "Spades", value1: 3, value2: 0 },
    { cardName: "2", type: "Spades", value1: 2, value2: 0 },

    // Club
    { cardName: "A", type: "Clubs", value1: 1, value2: 11 },
    { cardName: "K", type: "Clubs", value1: 10, value2: 0 },
    { cardName: "Q", type: "Clubs", value1: 10, value2: 0 },
    { cardName: "J", type: "Clubs", value1: 10, value2: 0 },
    { cardName: "10", type: "Clubs", value1: 10, value2: 0 },
    { cardName: "9", type: "Clubs", value1: 9, value2: 0 },
    { cardName: "8", type: "Clubs", value1: 8, value2: 0 },
    { cardName: "7", type: "Clubs", value1: 7, value2: 0 },
    { cardName: "6", type: "Clubs", value1: 6, value2: 0 },
    { cardName: "5", type: "Clubs", value1: 5, value2: 0 },
    { cardName: "4", type: "Clubs", value1: 4, value2: 0 },
    { cardName: "3", type: "Clubs", value1: 3, value2: 0 },
    { cardName: "2", type: "Clubs", value1: 2, value2: 0 },

    // Hearts
    { cardName: "A", type: "Hearts", value1: 1, value2: 11 },
    { cardName: "K", type: "Hearts", value1: 10, value2: 0 },
    { cardName: "Q", type: "Hearts", value1: 10, value2: 0 },
    { cardName: "J", type: "Hearts", value1: 10, value2: 0 },
    { cardName: "10", type: "Hearts", value1: 10, value2: 0 },
    { cardName: "9", type: "Hearts", value1: 9, value2: 0 },
    { cardName: "8", type: "Hearts", value1: 8, value2: 0 },
    { cardName: "7", type: "Hearts", value1: 7, value2: 0 },
    { cardName: "6", type: "Hearts", value1: 6, value2: 0 },
    { cardName: "5", type: "Hearts", value1: 5, value2: 0 },
    { cardName: "4", type: "Hearts", value1: 4, value2: 0 },
    { cardName: "3", type: "Hearts", value1: 3, value2: 0 },
    { cardName: "2", type: "Hearts", value1: 2, value2: 0 },

    // Club
    { cardName: "A", type: "Diamonds", value1: 1, value2: 11 },
    { cardName: "K", type: "Diamonds", value1: 10, value2: 0 },
    { cardName: "Q", type: "Diamonds", value1: 10, value2: 0 },
    { cardName: "J", type: "Diamonds", value1: 10, value2: 0 },
    { cardName: "10", type: "Diamonds", value1: 10, value2: 0 },
    { cardName: "9", type: "Diamonds", value1: 9, value2: 0 },
    { cardName: "8", type: "Diamonds", value1: 8, value2: 0 },
    { cardName: "7", type: "Diamonds", value1: 7, value2: 0 },
    { cardName: "6", type: "Diamonds", value1: 6, value2: 0 },
    { cardName: "5", type: "Diamonds", value1: 5, value2: 0 },
    { cardName: "4", type: "Diamonds", value1: 4, value2: 0 },
    { cardName: "3", type: "Diamonds", value1: 3, value2: 0 },
    { cardName: "2", type: "Diamonds", value1: 2, value2: 0 }
  ];

  drawCardsForUser() {
    let randomCard: any;
    randomCard = Math.ceil(Math.random() * 52);
    this.randomNum = randomCard;
    randomCard = this.cardDeck[randomCard];

    this.userCards.push(randomCard);

    this.playerSum += randomCard.value1;

    if (this.playerSum === 21) {
      window.alert("You win. Black Jack !!");
    } else if (this.playerSum > 21) {
      window.alert("You loose. Hand bust...");
    }
  }

  drawCardsForDealer(condition?: any) {
    let randomCard: any;

    randomCard = Math.ceil(Math.random() * 52);
    randomCard = this.cardDeck[randomCard];

    this.dealerCards.push(randomCard);
    this.dealerSum += randomCard.value1;
    if (condition) {
      // while (this.dealerSum < 17) {
      //   this.dealerSum += 1;
      // }
    }
  }

  dealersTurn() {
    this.showDealersCards = true;
    // this.drawCardsForDealer(true);
  }
}
