function pop(arr) {
  return arr.slice(0, -1);
}

function push(arr, ...elements) {
  return [...arr, ...elements];
}

function shift(arr) {
  return arr.slice(1);
}

function unshift(arr, ...elements) {
  return [...elements, ...arr];
}

function sort(arr, compareFn) {
  return [...arr].sort(compareFn);
}

module.exports = {
  pop,
  push,
  shift,
  unshift,
  sort
};