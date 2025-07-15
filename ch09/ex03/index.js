export function createPositiveNumber(x) {
  if(x <= 0) {
    throw new Error("Xに正の値を与えてください");
  }
  
  let privateX = x;
  
  return {
    getX: function() {
      return privateX;
    },
    
    setX: function(newX) {
      if(newX <= 0) {
        throw new Error("Xに正の値を与えてください");
      }
      privateX = newX;
    }
  };
}
