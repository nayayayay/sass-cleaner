const {expect} = require('chai');
const {data, expectedTokenisation} = require('./helpers');
const {Tokeniser} = require('../src/Tokeniser');

describe('Tokeniser#tokenise()', () => {
  it('should tokenise uglily-written CSS correctly', () => {
    const t = new Tokeniser();

    expect(t.tokenise(data)).to.equal(expectedTokenisation);
  });
});
