/**
 * - 戦士は攻撃力 `atk` フィールドを持つ
- 戦士は攻撃 `attack` メソッドを持つ
- `attack` メソッドはそのインスタンスの `atk` の 2 倍の値をダメージとして返す
- 魔法戦士は戦士を継承する
- 魔法戦士は魔力 `mgc` フィールドを持つ
- 魔法戦士の `attack` は戦士としての `attack` の値にそのインスタンスの `mgc` の値を加算した値をダメージとして返す
 */

// Class記法による実装
export class Warrior {
    constructor(atk) {
        this.atk = atk;
    }
    
    attack() {
        return this.atk * 2;
    }
}

export class MagicWarrior extends Warrior {
    constructor(atk, mgc) {
        super(atk);
        this.mgc = mgc;
    }
    
    attack() {
        return super.attack() + this.mgc;
    }
}

// Prototype記法による実装

export function WarriorPrototype(atk) {
    this.atk = atk;
}

WarriorPrototype.prototype.attack = function() {
    return this.atk * 2;
};

export function MagicWarriorPrototype(atk, mgc) {
    WarriorPrototype.call(this, atk);
    this.mgc = mgc;
}

// プロトタイプチェーンの設定
MagicWarriorPrototype.prototype = Object.create(WarriorPrototype.prototype);
MagicWarriorPrototype.prototype.constructor = MagicWarriorPrototype;

MagicWarriorPrototype.prototype.attack = function() {
    return WarriorPrototype.prototype.attack.call(this) + this.mgc;
};
