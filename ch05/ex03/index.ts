/**
 * 設問 5.3
 * 
 * "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"のいずれかの文字列リテラルを受け取って、その月の日数が31であれば true、そうでなければ false を返すメソッドを書きなさい。
 * if-else を使うバージョンと switch を使うバージョンの両方を作りなさい。
 */

/**
 * if-elseを使った場合の月の日数を判定するメソッド
 * @param month - 判定したい月
 * @returns 
 */
export function has31DaysIfElse(month: "Jan" | "Feb" | "Mar" | "Apr" | "May" | "Jun" | "Jul" | "Aug" | "Sep" | "Oct" | "Nov" | "Dec"): boolean {
    if (month === "Jan" || month === "Mar" || month === "May" || month === "Jul" || month === "Aug" || month === "Oct" || month === "Dec") {
        return true;
    } else {
        return false;
    }
}

/**
 * switchを使った場合の月の日数を判定するメソッド
 * @param month  - 判定したい月
 * @returns 
 */
export function has31DaysSwitch(month: "Jan" | "Feb" | "Mar" | "Apr" | "May" | "Jun" | "Jul" | "Aug" | "Sep" | "Oct" | "Nov" | "Dec"): boolean {
    switch (month) {
        case "Jan":
        case "Mar":
        case "May":
        case "Jul":
        case "Aug":
        case "Oct":
        case "Dec":
            return true;
        default:
            return false;
    }
}