const { expect } = require('chai');
const { expectedTokenisation, expectedNormalisation } = require('./helpers');
const { Normaliser } = require('../src/Normaliser');

describe('Normaliser#normalise()', () => {
  it('should normalise tokenified CSS to awesome CSS code', () => {
    const n = new Normaliser();

    expect(n.normalise(expectedTokenisation)).to.equal(expectedNormalisation);
  });
});
