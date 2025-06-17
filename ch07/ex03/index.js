function sum(array) {
  if (!Array.isArray(array)) return 0; 
  return array.reduce((acc, current) => acc + current, 0);
}

function join(array, separator = ',') {
  if (!Array.isArray(array)) return '';
  return array.reduce((acc, current, index) => {
    const currentStr = current == null ? '' : String(current);
    return index === 0 ? currentStr : acc + separator + currentStr;
  }, '');
}

function reverse(array) {
  if (!Array.isArray(array)) throw new Error('Input must be an array');
  return array.reduce((acc, current) => [current, ...acc], []);
}

function every(array, predicate) {
  if (!Array.isArray(array)) return true;
  return array.reduce((acc, current) => acc && predicate(current), true);
}

function some(array, predicate) {
    if (!Array.isArray(array)) return false;
  return array.reduce((acc, current) => acc || predicate(current), false);
}

module.exports = {
  sum,
  join,
  reverse,
  every,
  some
};