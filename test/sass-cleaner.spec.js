const { expect } = require('chai');
const { data, expectedNormalisation } = require('./helpers');
const { clean } = require('../src/index');

describe('clean()', () => {
  it('should handle a single file to parse', () => {
    expect(clean(data)).to.equal(expectedNormalisation);
  });

  it('should handle multiple files to parse', () => {
    expect(clean([data, data])).to.equal([expectedNormalisation, expectedNormalisation]);
  });
});
