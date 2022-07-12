const { stepsMockData } = require("./lib/mock");
const { parseChat } = require("./lib/parser");

// args
const input = stepsMockData[process.argv[3] || 1];
console.log(parseChat(input));
