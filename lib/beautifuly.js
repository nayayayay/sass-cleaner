const path = require('path');
const fs = require('fs');

/**
 * The current version of sass-cleaner.
 * @type {string}
 */
const version = '1.0.2';

/**
 * Beautifuly SASS generated CSS.
 * @param {string} filepath The file to beautifuly.
 */
const beautifuly = filepath => {
    if (!path.isAbsolute(filepath)) {
        filepath = path.normalize(filepath);
    }
    fs.readFile(filepath, {encoding: 'utf8', flag: 'r+'}, (err, data) => {
        if (err) throw err;
        data = data.replace(/;\s*}\n*\s*/g, ';\n}\n\n');
        data = data.replace(/;\n\s+/g, ';\n    ');
        data = data.replace(/{\n\s+/g, '{\n    ');
        data = data.replace(/}\n*\/\*# sourceMappingURL.*\n*/g, '}\n');

        fs.writeFile(filepath, data, {encoding: 'utf8'}, err => {
            if (err) throw err;
        });
    });
};

exports.version = version;
exports.beautifuly = beautifuly;

module.exports = beautifuly;
