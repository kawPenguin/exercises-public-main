import { instanceOf } from "./index.js";

// テストクラスの定義
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}

class Car {
  constructor(brand) {
    this.brand = brand;
  }
}

describe('instanceOf関数のテスト', () => {
  // 多段に継承したクラスのインスタンスと基底クラスのコンストラクタを入力するケース
  test('多段継承: DogインスタンスがAnimalのインスタンスとして認識される', () => {
    const dog = new Dog('ポチ', '柴犬');
    expect(instanceOf(dog, Animal)).toBe(true);
  });
  
  // 継承関係にないインスタンスとクラスのコンストラクタを入力するケース
  test('継承関係なし: DogインスタンスとCarクラスは関係ない', () => {
    const dog = new Dog('ポチ', '柴犬');
    expect(instanceOf(dog, Car)).toBe(false);
  });
});