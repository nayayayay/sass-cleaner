const { Normaliser } = require('./index');

/**
 * Transform CSS into a token based array.
 * @class Tokeniser
 */
class Tokeniser {
  constructor() {
  }

  /**
   * Transform an ugly CSS content into some awesome CSS code.
   * @param {string} content - The CSS code to be tokenised.
   * @return {string[]} - A map of the code containing code and tokens.
   */
  tokenise(content) {
    let output = content;

    // TODO

    return output;
  }

  /**
   * Return the tokens used by the class in an enum typed object.
   * @return {number} - An enum styled object containing each token the class uses
   *                    as keys and incremental index as value. (e.g COMMENT: 0, SELECTOR: 1).
   */
  static tokens() {
    return {
      COMMENT: 0,
      SELECTOR: 1
    };
  }
}

module.export = Tokeniser;
