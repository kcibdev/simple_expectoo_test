const genRandom = (len) => {
  //generate a random secured string with length from parameter
  let random = "";
  let possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < len; i++) {
    random += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return random;
};

module.exports = genRandom;
