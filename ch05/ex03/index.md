# 設問 5.3

2. if-else を使う場合と switch を使う場合で、それぞれ可読性に対してどのようなメリットがあるか書きなさい

# 回答
## if-elseを使う場合のメリット

複雑な分岐が必要となる場合(x<10 && y<10)や、範囲で条件を分ける場合(10<x && x<=50) には、
明確に記載できる。

## switchを使うメリット

ある一つの変数に関して処理を分岐させる場合(設問5.3における月など)、
case分がどの値を刺しているかが明確となり、可読性が非常に高くなる。