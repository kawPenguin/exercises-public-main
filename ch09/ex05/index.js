export function instanceOf(object, constructor) {
  if (object == null) {
    return false;
  }
  
  if (typeof constructor !== 'function') {
    throw new TypeError('constructorが関数ではない');
  }
  
  const constructorPrototype = constructor.prototype;
  
  if (constructorPrototype == null || typeof constructorPrototype !== 'object') {
    throw new TypeError('constructorがnull or Objectではない');
  }
  
  let currentPrototype = Object.getPrototypeOf(object);
  
  while (currentPrototype !== null) {
    if (currentPrototype === constructorPrototype) {
      return true;
    }
    currentPrototype = Object.getPrototypeOf(currentPrototype);
  }
  
  return false;
}