#!/usr/bin/env node
var beautifuly = require('../lib/beautifuly');

process.argv.forEach(function (val, index) {
    if (index > 1) {
        beautifuly.beautifuly(val)
        console.log('The ugly file ' + val + ' was beautifulied. Thank you Simon!');
    }
});
