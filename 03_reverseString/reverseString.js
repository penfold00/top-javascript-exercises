const reverseString = function (string) {
  chars = string.split("");
  let rev = "";
  for (i = 1; i <= chars.length; i++) {
    rev += chars[chars.length - i];
  }
  return rev;
};
// Do not edit below this line
module.exports = reverseString;
