#ソースコード1
##　ソースコード
``` javascript
let a
a
=
3
console.log(a)
```

##　JSON
Node {
  type: 'Program',
  start: 0,
  end: 26,
  body: [
    Node {
      type: 'VariableDeclaration',
      start: 0,
      end: 5,
      declarations: [Array],
      kind: 'let'
    },
    Node {
      type: 'ExpressionStatement',
      start: 6,
      end: 11,
      expression: [Node]
    },
    Node {
      type: 'ExpressionStatement',
      start: 12,
      end: 26,
      expression: [Node]
    }
  ],
  sourceType: 'script'
}

## 図

``` javascript
let a; a = 3; console.log(a);
```

Node {
  type: 'Program',
  start: 0,
  end: 12,
  body: [
    Node {
      type: 'VariableDeclaration',
      start: 0,
      end: 6,
      declarations: [Array],
      kind: 'let'
    },
    Node {
      type: 'ExpressionStatement',
      start: 7,
      end: 12,
      expression: [Node]
    }
  ],
  sourceType: 'script'
}