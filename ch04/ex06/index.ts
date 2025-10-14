// - params には undefined またはオブジェクトが与えられる
// - params.maxWidth が与えられる場合 (正の整数と仮定して良い) はその値を利用する
// - params.maxHeight が与えられる場合 (正の整数と仮定して良い) はその値を利用する
function resize(params: { maxWidth?: number; maxHeight?: number } | undefined) {
  let maxWidth = 600;
  let maxHeight = 480;

  if (params && params.maxWidth) {
    maxWidth = params.maxWidth;
  }

  if (params && params.maxHeight) {
    maxHeight = params.maxHeight;
  }

  console.log({ maxWidth, maxHeight });
}

//`if` を利用せず `&&` や `||` を用いて `maxWidth` や `maxHeight` を設定する関数 (`resize1`)
function resize1(params: { maxWidth?: number; maxHeight?: number } | undefined) : void {
  const maxWidth = (params && params.maxWidth) || 600;
  const maxHeight = (params && params.maxHeight) || 480;

  console.log({ maxWidth, maxHeight });
}

//`if` を利用せず `?.` や `??` を用いて `maxWidth` や `maxHeight` を設定する関数 (`resize2`)
function resize2(params: { maxWidth?: number; maxHeight?: number } | undefined) : void {
  const maxWidth = params?.maxWidth ?? 600;
  const maxHeight = params?.maxHeight ?? 480;

  console.log({ maxWidth, maxHeight });
}


// 以下、出力結果
console.log("resize"); 
resize({ maxWidth: 100, maxHeight: 200 });//{ maxWidth: 100, maxHeight: 200 
resize({ maxWidth: 100 });//{ maxWidth: 100, maxHeight: 480 }
resize({ maxHeight: 200 });//{ maxWidth: 600, maxHeight: 200 }
resize({});//{ maxWidth: 600, maxHeight: 480 }
resize(undefined);//{ maxWidth: 600, maxHeight: 480 }

console.log("resize1");
resize1({ maxWidth: 100, maxHeight: 200 });//{ maxWidth: 100, maxHeight: 200 }
resize1({ maxWidth: 100 });//{ maxWidth: 100, maxHeight: 480 }
resize1({ maxHeight: 200 });//{ maxWidth: 600, maxHeight: 200 }
resize1({});//{ maxWidth: 600, maxHeight: 480 }
resize1(undefined);//{ maxWidth: 600, maxHeight: 480 }
 
console.log("resize2");
resize2({ maxWidth: 100, maxHeight: 200 });//{ maxWidth: 100, maxHeight: 200 }
resize2({ maxWidth: 100 });//{ maxWidth: 100, maxHeight: 480 }
resize2({ maxHeight: 200 });//{ maxWidth: 600, maxHeight: 200 }
resize2({});//{ maxWidth: 600, maxHeight: 480 }
resize2(undefined);//{ maxWidth: 600, maxHeight: 480 }
