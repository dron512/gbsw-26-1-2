const fs = require('fs');

const test = fs.readFileSync('ex01.js','utf-8');

console.log(test);

// require('./ex01')