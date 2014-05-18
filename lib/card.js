var Card = function (suit, value) {
  this.suit = suit;
  this.value = value;
  //return {suit: suit};
  //return {value: value};

  Object.freeze(this);
}

//var Card = Object.freeze(Card);
module.exports = Card;