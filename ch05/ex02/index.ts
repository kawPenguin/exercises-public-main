/**
 * 設問 5.2
 * 
 * 文字列のパラメータを取り、制御文字など文字列リテラル作成時エスケープシーケンスで記述する必要がある文字 
 * (p37 表 3-1 の`\\`より上)を、エスケープシーケンスに変換した文字列を返すメソッドを書きなさい。
 * 例えば文字列中に`\`が含まれていたら、`\\`に変換しなさい。
 * if-else で分岐するバージョンと switch で分岐するバージョンの両方を作りなさい。
 */

/**
 * 文字列中の制御文字などをエスケープシーケンスに変換(if-else)
 */
export function escapeCharactersIfElse(text: string): string {
    let escapedText: string = "";
    for (const char of text) {
        if (char === "\0") {
            escapedText += "\\0";
        }else if (char === "\b") {
            escapedText += "\\b";
        }else if (char === "\t") {
            escapedText += "\\t";
        }else if (char === "\n") {
            escapedText += "\\n";
        }else if (char === "\v") {
            escapedText += "\\v";
        }else if (char === "\f") {
            escapedText += "\\f";
        }else if (char === "\r") {
            escapedText += "\\r";
        }else if (char === "\"") {
            escapedText += "\\\"";
        }else if (char === "\'") {
            escapedText += "\\\'";
        }else if (char === "\\") {
            escapedText += "\\\\";
        }
    }   
  return escapedText;
}

/**
 * 文字列中の制御文字などをエスケープシーケンスに変換(switch)
 */
export function escapeCharactersSwitch(text: string): string {
  let escapedText: string = "";
  for (const char of text) {
    switch (char) {
      case "\0":
        escapedText += "\\0";
        break;
      case "\b":
        escapedText += "\\b";
        break;
      case "\t":
        escapedText += "\\t";
        break;
      case "\n":
        escapedText += "\\n";
        break;
      case "\v":
        escapedText += "\\v";
        break;
      case "\f":
        escapedText += "\\f";
        break;
      case "\r":
        escapedText += "\\r";
        break;
      case "\"":
        escapedText += "\\\"";
        break;
      case "\'":
        escapedText += "\\\'";
        break;
      case "\\":
        escapedText += "\\\\";
        break;
      default:
        escapedText += char;
    }
  }
  return escapedText;
}

