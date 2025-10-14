/**
 * 文中の counter をグループ化したクロージャを持つ関数 counterGroup を実装しなさい。
具体的には counterGroup は以下のメソッドを持つオブジェクトを返却しなさい。

- counterGroup#newCounter(): 文中の count と reset 同等の機能を持つ counter オブジェクトを返却する
- counterGroup#total(): これまで返却された counter が保持しているカウントの合計を返却する
- counterGroup#average(): これまで返却された counter が保持しているカウントの平均を返却する。counterGroup に属する counter が 1 つ以上存在していない場合 TypeError をスローする
- counterGroup#variance(): これまで返却された counter が保持しているカウントの分散を返却する。counterGroup に属する counter が 2 つ以上存在していない場合 TypeError をスローする

function counter(n){
    return {
        get count() {return n++},

        set count(m){
            if(m>n) n = m;
            else throw new Error("count can only be set to a larger value");
        }
    }
}
 */

export function counterGroup(){
    const counters = [];

    return {
        newCounter(){
            const counter = {
                value: 0,
                n() {
                    const currentValue = this.value;
                    this.value++;
                    return currentValue;
                },
                count() {
                    const currentValue = this.value;
                    this.value++;
                    return currentValue;
                },
                reset(){
                    this.value = 0;
                    return this.value;
                }
            }
            counters.push(counter);
            return counter;
        },

        total(){
            return counters.reduce((sum, counter) => sum + counter.value, 0);
        },

        average(){
            if(counters.length === 0){
                throw new TypeError();
            }
            return this.total() / counters.length;
        },

        variance(){
            if(counters.length < 2){
                throw new TypeError();
            }

            const avg = this.average();
            return counters.reduce((sum, counter) => {
                const diff = counter.value - avg;
                return sum + diff * diff;
            }, 0) / counters.length;
        }
    }
}