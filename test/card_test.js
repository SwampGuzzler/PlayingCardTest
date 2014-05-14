// test/card_test.js
var expect = require('chai').expect;
var Card = require('../lib/card');

describe('Card object tests', function() {
  var card;

  beforeEach(function() {
    card = new Card('Clubs', 2);
  });

  describe('constructor', function() {

    it('card should be truthy (exists)', function() {
      expect(card).to.be.ok;
    });

    it('card should have suit property', function() {
      expect(card).to.have.property('suit');
    });

    it('card should have value property', function() {
      expect(card).to.have.property('value');
    });

    it('card suit property matches beforeEach', function() {
      expect(card.suit).to.equal('Clubs');
    });
    it('card value property matches beforeEach', function() {
      expect(card.value).to.equal(2);
    });

    it('card properties are frozen', function() {
      expect(Object.isFrozen(card)).to.equal(true);
    });

  });
});