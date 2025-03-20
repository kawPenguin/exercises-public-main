#予想
1回目のconsole.logにはanswer:42が、2回目のconsole.logにはanswer:0が表示される。

＃結果
開発者ツール上には、objectとのみ表示され、左の▸を押下すると両方のanswerが0となっている。

HTMLを開いた状態のタブでは、1回目、2回目ともにanswer:0が表示された。中の値もanswer:0となっている。
開発者ツールを開いた除隊のタブでは、1回目はanswer:42、2回目はanswer:0が表示された。
ただし、中の値はanswer:0となっている。

#期待した結果を得るためには
期待した結果を得るためには、以下のように異なる変数に値をいれる方法が考えられる。

<!DOCTYPE html>
<html>
  <body>
    <script>
      const life = { answer: 42 };
      console.log(life);
      const life2 = { answer: 0 };
      console.log(life2);
    </script>
  </body>
</html>