export function fizzbuzz(){let result = "";for(let i=1;i<101;i++){if(i%15===0)result+="FizzBuzz\n";else if(i%3===0)result+="Fizz\n";else if(i % 5===0)result+="Buzz\n";else{result+=(i.toString())+"\n"}}return result;};