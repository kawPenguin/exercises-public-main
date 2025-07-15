/**
 * 以下のようなクラス `Resource` を考える。このクラスを利用する際は、必ず最後に `close` を呼ぶ必要がある。
解放処理の呼び出し忘れによるリソースのリークにを防ぐため、終了時に必ず close が呼ばれるようにする `withResource` 関数を書きなさい

 */

export function withResource(resource, callback){
    try{
        callback(resource);
    }finally{
        resource.close();
    }
}