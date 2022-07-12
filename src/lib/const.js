const USER_TYPES = {
  CUSTOMER: "customer",
  AGENT: "agent",
};

const CHAT_REGEX = {
  // single line
  LINE: /^(?<date>\d{2}:\d{2}:\d{2}) (?<user>.*?) : (?<sentence>.*\n?)$/,
  // get all chat lines (date is the begin of a line)
  LINES: /(\d{2}:\d{2}:\d{2}.+?\.\n?)/gm,
};

module.exports = {
  USER_TYPES,
  CHAT_REGEX,
};
