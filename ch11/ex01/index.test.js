import { TypeMap } from "./index.js";

describe('TypeMap', () => {
  let typeMap;

  beforeEach(() => {
    typeMap = new TypeMap();
  });

  it('正常系', () => {
    // テスト用のカスタムクラス
    class UserProfile {}
    const user = new UserProfile();

    // 値を設定
    typeMap.set(String, 'Taro Yamada');
    typeMap.set(Number, 25);
    typeMap.set(UserProfile, user);

    // 値を検証
    expect(typeMap.get(String)).toBe('Taro Yamada');
    expect(typeMap.get(Number)).toBe(25);
    expect(typeMap.get(UserProfile)).toBe(user);
    expect(typeMap.get(UserProfile)).toBeInstanceOf(UserProfile);
  });

  it('keyとvalueの不一致', () => {
    expect(() => {
      typeMap.set(Boolean, 123);
    }).toThrow('valueの値が不正です。');
  });

  it("不正なキー", ()=> {
    expect(()=> {
        typeMap.set("NewValues", "notGoodValue");
    }).toThrow('キーはコンストラクタ関数である必要があります。');
  })


});