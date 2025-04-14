export function convertLfToCrlf(input:string){
    return input.replace(`\n`, `\r\n`);
}

export function convertCrlfToLf(input:string){
    return input.replace(`\r\n`, `\n`);
}