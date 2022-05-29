module.exports = {
  addition: (n1, n2) => {
    return n1 + n2;
  },
  subtraction: (n1, n2) => {
    return n1 - n2;
  },
  multiplication: (n1, n2) => {
    return n1 * n2;
  },
  division: (n1, n2) => {
    return n2 !== 0 ? n1 / n2 : null;
  },
}
