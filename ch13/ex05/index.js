function g1() {
  return wait(1000)
    .then(() => {
      console.log("A");
      return wait(2000); // 次のPromiseを返す
    })
    .then(() => {
      console.log("B");
      return wait(3000); // 次のPromiseを返す
    })
    .then(() => {
      console.log("C");
    });
}

function g2() {
  return wait(1000)
    .then(() => console.log("A"))
    .then(() => wait(2000))
    .then(() => console.log("B"))
    .then(() => wait(3000))
    .then(() => console.log("C"));
}

function g3() {
  function fetchUser() {
    return Promise.resolve({ id: 42, name: "John" });
  }
  function fetchUserFriends(user) {
    return Promise.resolve([
      { name: "Sam", id: 100 },
      { name: "Bob", id: 1 },
    ]);
  }

  return fetchUser()
    .then((user) => {
      // ユーザー情報と友達情報を並行して解決し、結果を配列で次に渡す
      return Promise.all([user, fetchUserFriends(user)]);
    })
    .then(([user, friends]) => {
      // 配列の分割代入で両方の結果を受け取る
      console.log(`${user.name} has ${friends.length} friends!`);
    });
}

function g4() {
  function someFunction() {
    return 42;
  }

  // NOTE: この関数 g4 は Promise を返す必要があるものとする
  // (利用しているフレームワークはライブラリがそういう関数を要求するとでも思って下さい)
  return Promise.resolve(someFunction());
}