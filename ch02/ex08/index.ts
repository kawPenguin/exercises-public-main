import * as acorn from 'acorn';

const code = `let a
a
=
3
console.log(a)`;
const code2 = `let a; a = 3`;

const ast = acorn.parse(code,  {ecmaVersion: 2020});
console.log(ast);

const ast2 = acorn.parse(code2, {ecmaVersion:2020});
console.log(ast2);