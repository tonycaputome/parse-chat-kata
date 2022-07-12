const { CHAT_REGEX, USER_TYPES } = require("./const");
const { getUserType, createMention } = require("./utils");

const getChatLines = (input) => {
  const rule = CHAT_REGEX.LINES;
  const output = [];
  let check;
  while ((check = rule.exec(input)) !== null) output.push(check[1]);
  return output;
};

const parseLine = (input) => {
  const rule = CHAT_REGEX.LINE;
  const { groups } = rule.exec(input);
  const { date, user, sentence } = groups;
  return {
    date,
    mention: createMention(date, user),
    sentence,
    type: getUserType(user),
  };
};

const parseChat = (input) => {
  const lines = getChatLines(input);
  const output = [];

  lines.forEach((line) => {
    const payload = parseLine(line);
    if (payload) output.push(payload);
  });

  return output;
};

module.exports = {
  parseChat,
};
