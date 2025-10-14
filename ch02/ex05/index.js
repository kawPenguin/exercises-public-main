// このクラスでは、Mapを拡張して、キーがマップ上に存在しないとき、
// get()メソッドがnullの代わりに指定した値を返すようにする
class DefaultMap extends Map {
    constructor(defaultValue){
        super()
        this.defaultValue = defaultValue
    }

    get(key){
        if(this.has(key)){
            return super.get(key)
        }
        else{
            return this.defaultValue
        }    
    }
}

class Histogram {
    constructor() {
        this.letterCounts = new DefaultMap(0)
        this.totalLetters = 0
    }


    add(text) {
        // テキストから空白文字を取り除き、すべての文字を大文字に変換
        const replaceText = text.replace(/\s/g, "").toUpperCase()

        // テキスト中の文字をループする
        for (const character of replaceText) {
            // 文字の現在のカウントを取得し、存在しない場合は0から開始
            const count = this.letterCounts.get(character) || 0
            this.letterCounts.set(character, count + 1)
            this.totalLetters++
        }
    }

    // ヒストグラムを文字列へ変換し、ASCIIグラフィックとして表示
    toString() {
        let entries = [...this.letterCounts]

        entries.sort((a, b) => {
            if(a[1] === b[1]){
                return a[0] < b[0] ? -1: 1
            }else{
                return b[1] - a[1]
            }
        });

        //文字数をパーセントへ変換
        for(const entry of entries){
            entry[1] = entry[1] / this.totalLetters*100
        }

        //1パーセント未満は表示しない
        entries = entries.filter(entry => entry[1] >= 1)

        const lines = entries.map(
            ([l,n]) => `${l}: ${"#".repeat(Math.round(n))} ${n.toFixed(2)}%`)
        

        //各行を改行文字で区切って結合し、結合した文字列を返す
        return lines.join("\n")
    }
}

async function histogramFromStdin(){
    process.stdin.setEncoding("utf-8")
    const histogram = new Histogram()
    for await(const chunk of process.stdin){
        histogram.add(chunk)
    }
    return histogram
}

histogramFromStdin().then(histogram => {console.log(histogram.toString())})

