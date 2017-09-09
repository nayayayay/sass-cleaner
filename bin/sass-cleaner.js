#!/usr/bin/env node
const beautifuly = require('../lib/beautifuly');

process.argv.forEach((val, index) => {
    if (index > 1) {
        beautifuly.beautifuly(val)
        console.log(`The ugly file ${val} was beautifulied! <3`);
    }
});
