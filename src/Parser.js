const Tokeniser = require('./Tokeniser');
const Normaliser = require('./Normaliser');

/**
 * Beautify CSS by tokenising it then normalising it using the
 * Tokeniser and Normaliser classes.
 * @class Parser
 */
class Parser {
  constructor() {
  }

  /**
   * Transform an ugly CSS content into some awesome CSS code.
   * @param {string} content - The CSS code to parse.
   * @return {string} - The beautified CSS code.
   */
  parse(content) {
    const tokeniser = new Tokeniser();
    const normaliser = new Normaliser();
    let output = content;

    output = normaliser(tokeniser(content));

    return output;
  }
}

module.exports = Parser;
