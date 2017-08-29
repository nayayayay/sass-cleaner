const Parser = require('./Parser');
const Tokeniser = require('./Tokeniser');
const Normaliser = require('./Normaliser');

/**
 * The currently used version of sass-cleaner.
 * @const {string}
 */
const version = `v${require('../package.json').version}`;

/**
 * Transform ugly CSS into awesome CSS.
 * @param {string|string[]} content - The content of a css file, or an array
 *                                    if more than one.
 * @return {string|string[]} - The beautified content, with the same type
 *                             (string or string[]).
 */
const clean = (content) => {
  // Cast css to an Array, whatever its origin type was
  const stylesheets = Array(content);

  const parser = new Parser();
  let output = [];

  for (let i = 0; i < stylesheets.length; i++) {
    output[i] = parser.parse(stylesheets[i]);
  }

  // Return the processed data in the same type it was sent to the function
  return output.length > 1 ? output : output[0];
}

exports.version = version;
exports.clean = clean;
exports.Parser = Parser;
exports.Tokeniser = Tokeniser;
exports.Normaliser = Normaliser;
