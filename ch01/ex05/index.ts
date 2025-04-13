export function abs(num:number):number{
    if(num >= 0){
        return num;
    }
    else{
        return -num;
    }
}

export function sum(numArray:number[]):number{
    let sum = 0;

    for(const num of numArray){
        sum += num;
    }

    return sum;
}

export function factorial(n:number):number{
    let product = 1;
    while(n > 1){
        product *= n;
        n--;
    }
    return product;
}