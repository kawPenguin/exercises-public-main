export const addMyCall = (f) => {
  f.myCall = function(thisArg, ...args) {
    return f.bind(thisArg, ...args)();
  };
};


const sqaure = (n) => n * n;

addMyCall(sqaure);

console.log(sqaure.myCall(null, 5)); // 25

export function Product(name, price) {
  this.name = name;
  this.price = price;
}

addMyCall(Product);

const that = {};
Product.myCall(that, "Apple", 100);
console.log(that); // { name: 'Apple', price: 100 }