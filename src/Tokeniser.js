const Normaliser = require('./Normaliser');

/**
 * Transform CSS into a token based array.
 * @class Tokeniser
 */
class Tokeniser {
  // constructor() {
  // }

  /**
   * Transform an ugly CSS content into some awesome CSS code.
   * @param {string} content - The CSS code to be tokenised.
   * @return {string[]} - A map of the code containing code and tokens.
   */
  tokenise(content) {
    // Get tokens
    const tokens = Tokeniser.tokens();

    // Declare contexts
    const SELECTOR = 0;
    const ATTRIBUTE = 0;
    const VALUE = 0;

    let output = [];
    let context = null;
    let char = '';
    let cursor = 0;
    let buffer = 0;
    let isComment = false;

    for (let i = 0; i < content.length; i++) {
      char = content.charAt(i);

      // If comment, check for the comment's end
      if (isComment) {
        // If end, add it to the output
        if (char === '*' && content.charAt(i + 1) === '/') {
          isComment = false;
          output.push(tokens.COMMENT);
          output.push(content.substr(buffer + 2, i - buffer - 1));

          // Go one char forward
          i++;
        }

        // Go to next char
        continue;
      }
    }

    switch(context) {
      case SELECTOR:
        if (char === '{') {
          output.push(tokens.SELECTOR);

          // Get selector
          let selector = content.substr(cursor, i - cursor - 1);
          // Normalise selector
          selector = selector.split(',');

          for (let j = 0; j < selector.length; j++) {
            selector[j] = `, ${selector[j].trim()}`;
          }

          // Add it to the output
          output.push(selector.join().substr(2));
        }
    }

    return output;
  }

  /**
   * Return the tokens used by the class in an enum typed object.
   * @return {Object} - An enum styled object containing each token the class uses
   *                    as keys and incremental index as value. (e.g COMMENT: 0, SELECTOR: 1).
   */
  static tokens() {
    return {
      COMMENT: 0,
      SELECTOR: 1
    };
  }
}

module.exports = Tokeniser;
