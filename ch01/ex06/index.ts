export function fib(n:number):number{

    const fib_value = [1,1,0];

    for(let i = 2; i < n;i++){
        fib_value[2] = fib_value[0] + fib_value[1];
        fib_value[0] = fib_value[1];
        fib_value[1] = fib_value[2];
    }

    return fib_value[2];

}