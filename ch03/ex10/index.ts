const symbol1 = Symbol("key");
const symbol2 = Symbol("key");

const obj = {
    [symbol1]: "値1",
    [symbol2]: "値2"
  };
  
console.log(obj[symbol1]); 
console.log(obj[symbol2]); 

const forSymbol1 = Symbol.for("key");
const forSymbol2 = Symbol.for("key");

const forObj = {
    [forSymbol1]: "値A",
    [forSymbol2]: "値B"
  };

console.log(forObj[forSymbol1]); 
console.log(forObj[forSymbol2]); 