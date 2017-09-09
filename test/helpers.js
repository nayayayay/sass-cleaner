const {Tokeniser} = require('../src/index');

// Get the tokens
const { COMMENT, SELECTOR } = Tokeniser.tokens();

// Ugly CSS on purpose
const data = `

      /*  CSS ;-;    */

      html,
      body{ margin: 0; background-color :   
           
                  #0fa401}
                  .container {width:100%;
                    display:flex;
                
                }

    `;

// Expected tokenisation from data
const expectedTokenisation = [
  COMMENT, '  CSS ;-;    ',
  SELECTOR,
  'html, body',
  'margin', '0',
  'background-color', '#0fa401',
  SELECTOR,
  '.container',
  'width', '100%',
  'display', 'flex'
];

// Expected normalisation from tokenisation
const expectedNormalisation =
  `/* CSS ;-; */

  html, body {
    margin: 0;
    background-color: #0fa401;
  }

  .container {
    width: 100%;
    display: flex;
  }
  `;

exports.data = data;
exports.expectedTokenisation = expectedTokenisation;
exports.expectedNormalisation = expectedNormalisation;
