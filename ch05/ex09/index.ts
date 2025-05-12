/**
 * 問題 5.9
 * 
 * 任意の文字列を引数にとり、その文字列が JSON としてパース出来る場合 `{success: true, data: <パースしたデータ>}`を返し、
 * できない場合 `{success: false, error: <エラー内容>}` を返す関数を書きなさい
 */

export function parseJson(input: string): { success: true; data: any } | { success: false; error: string } {
    try {
        const data = JSON.parse(input);
        return { success: true, data };
    } catch (e) {
        return { success: false, error: (e as Error).message };
    }
}