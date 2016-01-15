var path = require('path');
var fs = require('fs');

var beautifuly = function(filepath) {
    if (!path.isAbsolute(filepath)) {
        filepath = path.normalize(filepath);
    }
    fs.readFile(filepath, {encoding: 'utf8', flag: 'r+'}, function(err, data) {
        if (err) throw err;
        data = data.replace(/;\s*}\n*\s*/g, ';\n}\n\n');
        data = data.replace(/;\n\s+/g, ';\n    ');
        data = data.replace(/{\n\s+/g, '{\n    ');
        data = data.replace(/}\n*\/\*# sourceMappingURL.*\n*/g, '}\n');

        fs.writeFile(filepath, data, {encoding: 'utf8'}, function(err) {
            if (err) throw err;
        });
    });
};

exports.beautifuly = beautifuly;
