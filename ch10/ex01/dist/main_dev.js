/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./ch10/ex01/index.cjs":
/*!*****************************!*\
  !*** ./ch10/ex01/index.cjs ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("{// 必要なモジュールへの参照\nconst stats = __webpack_require__(/*! ./stats.cjs */ \"./ch10/ex01/stats.cjs\");\nconst BitSet = (__webpack_require__(/*! ./sets.cjs */ \"./ch10/ex01/sets.cjs\").BitSet);\n\n// モジュールを使ってコードを記述\nlet s = new BitSet(100);\ns.insert(10);\ns.insert(20);\ns.insert(30);\n\nlet average = stats.mean([...s]);\n\n//# sourceURL=webpack://preset-ts/./ch10/ex01/index.cjs?\n}");

/***/ }),

/***/ "./ch10/ex01/sets.cjs":
/*!****************************!*\
  !*** ./ch10/ex01/sets.cjs ***!
  \****************************/
/***/ (() => {

eval("{/**\n* AbstractSetクラスでは、has()抽象メソッドのみを定義する。\n*/\nclass AbstractSet {\n    // このメソッドではエラーをスローする。このようにすることで、\n    // サブクラスでこのメソッドを定義しなければならないようにする。\n    has(x) { throw new Error(\"Abstract method\"); }\n}\n\n/*\n* AbstractEnumerableSetは、AbstractSetの抽象サブクラス。\n* セットの大きさを返す抽象ゲッターメソッドと、抽象イテレータを定義する。\n* また、この2つの抽象メソッドを使って、isEmpty()、toString()、\n* equals()メソッドを実装する。サブクラスでは、イテレータと\n* 大きさを返すゲッターメソッド、has()メソッドを実装するだけで、\n* この3つのメソッドも使えるようになる。\n*/\nclass AbstractEnumerableSet extends AbstractSet {\n    get size() { throw new Error(\"Abstract method\"); }\n    [Symbol.iterator]() { throw new Error(\"Abstract method\"); }\n    isEmpty() { return this.size === 0; }\n    toString() { return `{${Array.from(this).join(\", \")}}`; }\n    equals(set) {\n        // 比較対象のセットがAbstractEnumerableSetでなければ、等しくない。\n        if (!(set instanceof AbstractEnumerableSet)) return false;\n        // 大きさが同じでなければ、等しくない。\n        if (this.size !== set.size) return false;\n        // このセットの要素を巡回する。\n        for(let element of this) {\n        // 要素が比較対象のセットのメンバーでなければ、等しくない。\n        if (!set.has(element)) return false;\n        }\n        // 要素が一致したので、2つのセットは等しい。\n        return true;\n    }\n}\n\n/*\n* AbstractWritableSetは、AbstractEnumerableSetの抽象サブクラス。\n* セットから個々のメンバーを挿入したり削除したりするために、\n* それぞれinsert()とremove()抽象メソッドを定義する。\n* また、この2つのメソッドを使って、add()、subtract()、intersect()\n* 具象メソッドを実装する。このAPI群は、JavaScript標準のSetクラスと\n* 異なっているので注意。\n*/\nclass AbstractWritableSet extends AbstractEnumerableSet {\n    insert(x) { throw new Error(\"Abstract method\"); }\n    remove(x) { throw new Error(\"Abstract method\"); }\n    add(set) {\n        for(let element of set) {\n        this.insert(element);\n    }\n    }\n    subtract(set) {\n        for(let element of set) {\n            this.remove(element);\n        }\n    }\n    intersect(set) {\n        for(let element of this) {\n            if (!set.has(element)) {\n                this.remove(element);\n            }\n        }\n    }\n}\n\n/**\n* BitSetはAbstractWritableSetの具象サブクラス。ある最大値よりも\n* 小さい非負の整数がメンバーとなるセットに対して、非常に効率的な\n* 固定サイズのセットを実装する。\n*/\nclass BitSet extends AbstractWritableSet {\n    constructor(max) {\n        super();\n        this.max = max; // 保存可能な最大整数。\n        this.n = 0; // セット中に含まれる整数の数。\n        this.numBytes = Math.floor(max / 8) + 1; // 必要となるバイト数。\n        this.data = new Uint8Array(this.numBytes); // バイトの配列。\n    }\n    // このセットに保存可能な値かどうかを確認する内部メソッド。\n    _valid(x) { return Number.isInteger(x) && x >= 0 && x <= this.max; }\n    // data配列のあるバイトのあるビットが立っているかどうかを調べる。\n    // trueまたはfalseを返す。\n    _has(byte, bit) { return (this.data[byte] & BitSet.bits[bit]) !== 0; }\n    // 値xがBitSetに含まれるかどうか。\n    has(x) {\n        if (this._valid(x)) {\n            let byte = Math.floor(x / 8);\n            let bit = x % 8;\n            return this._has(byte, bit);\n        } else {\n            return false;\n        }\n    }\n\n    // 値xをBitSetに挿入する。\n    insert(x) {\n        if (this._valid(x)) { // 値が正当な場合、\n            let byte = Math.floor(x / 8); // バイトとビットに変換する。\n            let bit = x % 8;\n            if (!this._has(byte, bit)) { // そのビットがまだ立っていない場合、\n                this.data[byte] |= BitSet.bits[bit]; // ビットを立てる。\n                this.n++; // セットの大きさをインクリメントする。\n            }\n        } else {\n            throw new TypeError(\"Invalid set element: \" + x );\n        }\n    }\n\n    remove(x) {\n        if (this._valid(x)) { // 値が正当な場合、\n            let byte = Math.floor(x / 8); // バイトとビットを計算する。\n            let bit = x % 8;\n            if (this._has(byte, bit)) { // そのビットが立っていた場合、\n                this.data[byte] &= BitSet.masks[bit]; // ビットを落とす。\n                this.n--; // セットの大きさをデクリメントする。\n            }\n        } else {\n            throw new TypeError(\"Invalid set element: \" + x );\n        }\n    }\n    // セットの大きさを返すゲッターメソッド。\n    get size() { return this.n; }\n        \n    // 単にビットが立っているかどうかをチェックすることで巡回する。\n    // （このコードはあまり賢くなく、大幅に最適化できる。）\n    *[Symbol.iterator]() {\n        for(let i = 0; i <= this.max; i++) {\n            if (this.has(i)) {\n                yield i;\n            }\n        }\n    }\n}\n\n// has()、insert()、remove()メソッドで使うために事前に計算しておく。\nBitSet.bits = new Uint8Array([1, 2, 4, 8, 16, 32, 64, 128]);\nBitSet.masks = new Uint8Array([~1, ~2, ~4, ~8, ~16, ~32, ~64, ~128]);\n\n//# sourceURL=webpack://preset-ts/./ch10/ex01/sets.cjs?\n}");

/***/ }),

/***/ "./ch10/ex01/stats.cjs":
/*!*****************************!*\
  !*** ./ch10/ex01/stats.cjs ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("{const sum = (x, y) => x + y;\nconst square = x => x * x;\n\nexports.mean = data => data.reduce(sum)/data.length;\nexports.stddev = function(d){\n    let m = exports.mean(d);\n    return Math.sqrt(d.map(x => x - m).map(square).reduce(sum)/(d.length-1))\n};\n\n//# sourceURL=webpack://preset-ts/./ch10/ex01/stats.cjs?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./ch10/ex01/index.cjs");
/******/ 	
/******/ })()
;