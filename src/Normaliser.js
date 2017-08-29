const { Tokeniser } = require('./index');

/**
 * Transform a token based array into beautified CSS.
 * @class Normaliser
 */
class Normaliser {
  constructor() {
  }

  /**
   * Transform a list of tokens to a a beautified CSS code.
   * @param {string[]} tokenList - The list of tokens representing the content.
   * @return {string} - The beautified CSS code.
   */
  normalise(tokenList) {
    const tokens = Tokeniser.tokens();
    let output = '';

    // TODO

    return output;
  }
}

module.export = Tokeniser;
