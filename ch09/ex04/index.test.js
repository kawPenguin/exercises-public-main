import { MagicWarrior, Warrior } from "./index.js";

describe('Warrior', () => {
    test('指定した攻撃力でWarriorを作成できる', () => {
        const warrior = new Warrior(10);
        expect(warrior.atk).toBe(10);
    });

    test('攻撃力の2倍を返す', () => {
        const warrior = new Warrior(15);
        expect(warrior.attack()).toBe(30);
    });
});

describe('MagicWarrior', () => {
    test('攻撃力と魔法力を持つMagicWarriorを作成できる', () => {
        const magicWarrior = new MagicWarrior(10, 5);
        expect(magicWarrior.atk).toBe(10);
        expect(magicWarrior.mgc).toBe(5);
    });

    test('攻撃力の2倍に魔法力を加えた値を返す', () => {
        const magicWarrior = new MagicWarrior(10, 5);
        expect(magicWarrior.attack()).toBe(25); // (10 * 2) + 5
    });
});