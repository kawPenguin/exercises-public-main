import { fizzBuzz, ternary_operator_fizzBuzz } from "./index.ts";

describe("FizzBuzz functions", () => {

  // 出力をキャプチャするためのヘルパー関数
  const captureConsoleOutput = (fn: Function): string[] => {
    const output: string[] = [];
    const originalLog = console.log;
    
    // console.logをモックして、出力をキャプチャ
    console.log = (message: string) => {
      output.push(message);
    };
    
    // 関数を実行
    fn();

    // 元のconsole.logに戻す
    console.log = originalLog;
    return output;
  };

  it("should have the same output for ternary_operator_fizzBuzz and fizzBuzz", () => {
    // それぞれの関数から出力をキャプチャ
    const ternaryOutput = captureConsoleOutput(ternary_operator_fizzBuzz);
    const fizzBuzzOutput = captureConsoleOutput(fizzBuzz);

    // 出力が同じであることを確認
    expect(ternaryOutput).toEqual(fizzBuzzOutput);
  });

});