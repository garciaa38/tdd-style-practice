
function returnsThree() {
  // Your code here
  return 3;
}

function reciprocal(n) {
  // Your code here
  try {
    if (n < 1 || n > 1000000) {
      throw new RangeError("Number must be between 1 and 1,000,000!");
    } else {
      return 1 / n;
    }
  } catch (e) {
    throw e;
  }
}

module.exports = {
  returnsThree,
  reciprocal
};
