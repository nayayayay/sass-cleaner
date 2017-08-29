const { expect } = require('chai');
const { data, expectedNormalisation } = require('./helpers');
const { Parser } = require('../src/Parser');

describe('Normaliser#normalise()', () => {
  it('should turn ugly CSS into the best CSS anyone has ever seen', () => {
    const p = new Parser();

    expect(p.parse(data)).to.equal(expectedNormalisation);
  });
});
