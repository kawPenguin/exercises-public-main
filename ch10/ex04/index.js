// デフォルトインポート（Userクラス）
import UserInfo from './utils.js';

// 名前変更を伴うインポート
import { add2 as sum } from './utils.js';


// --- xporter.jsからの再エクスポート
import { add, Person } from './exporter.js';


const result1 = sum(10, 5);
console.log(result1);//15

const user1 = new UserInfo("kawai");//こんにちは、kawaiです。
user1.greet();

const add1 = add(100, 1);
console.log(add1);//101

const user2 = new Person("Person Kawai");
user2.greet();//こんにちは、Person Kawaiです。