const { USER_TYPES } = require("./const");

let lastUserName = null;

const getUserType = (user) => {
  if (!user) return;
  // const key = user.toUpperCase();
  /*  
  const checkUser =
    USER_TYPES[key] !== undefined ? USER_TYPES[key] : USER_TYPES.CUSTOMER;
  return checkUser; 
  */
  if (lastUserName) {
    return lastUserName === user ? USER_TYPES.CUSTOMER : USER_TYPES.AGENT;
  }
  lastUserName = user;
  return USER_TYPES.CUSTOMER;
};

const createMention = (date, user) => {
  return `${date} ${user} : `;
};

module.exports = {
  getUserType,
  createMention,
};
