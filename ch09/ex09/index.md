# 設問
「SOLID 原則」とは、オブジェクト指向の設計原則として従うべき 5 つの原則である。

- 単一責任の原則 (single-responsibility principle)
- 開放閉鎖の原則（open/closed principle）
- リスコフの置換原則（Liskov substitution principle）
- インターフェース分離の原則 (Interface segregation principle)
- 依存性逆転の原則（dependency inversion principle）

1. これら 5 つの原則についてそれぞれ説明しなさい
2. 5 つの原則から任意の 1 つ以上を選び、原則を満たさないコードと原則を満たすコードの例を書きなさい
   - コードは各原則を説明するためのスケルトンコードで良く、実際に動作する必要はない

# 回答1
- 単一責任の原則 (single-responsibility principle)
クラスには、単一の責任をもたせる。
クラスに多くの責任があると、バグが発生する可能性が高くなる。

- 開放閉鎖の原則（open/closed principle）
クラスは拡張にはオープンで、変更にはクローズドであるべき。
クラスの現在の動作を変更すると、そのクラスを使用するすべてのシステムに影響を与える。
この原則は、クラスの既存の動作を変更することなく、クラスの動作を拡張することを目的としている。

- リスコフの置換原則（Liskov substitution principle）
子クラスは、親クラスと同じリクエストを処理し、同じ結果か、同様の結果を提供できる必要がある。
この原則は、親クラスやその子クラスがエラーなしで同じ方法で利用できるように、
一貫性を保つことを目的にしている。

- インターフェース分離の原則 (Interface segregation principle)
クラスは、その役割を果たすために必要な動作のみを実行する必要がある。
それ以外の動作は、完全に削除するか、将来的に他クラスで使用する可能性がある場合は、
別の場所へ移動する必要がある。
この原則は、動作のセットをより細かく分割して、クラスが必要なもののみを実行することを目的としている。

- 依存性逆転の原則（dependency inversion principle)
クラスは動作を実行するために使用するツールと融合すべきではない。
ツールがクラスに接続できるようにするインタフェースと融合すべきである。
この原則は、インタフェースを導入することにより、上位レベルのクラスが下位レベルのクラスに依存するのを減らすことを目的としている。

# 回答2
単一責任の原則に違反するコードは、以下の通り。
```js
public class UserManager {
    private String username;
    private String email;
    private String password;
    
    // ユーザー情報の管理
    public void setUsername(String username) {
        this.username = username;
    }
    
    public void setEmail(String email) {
        this.email = email;
    }
    
    public void setPassword(String password) {
        this.password = password;
    }
    
    // データベース操作
    public void saveToDatabase() {
        // データベースに保存するロジック
        System.out.println("Saving user to database...");
        // SQL実行処理など
    }
    
    public void deleteFromDatabase() {
        // データベースから削除するロジック
        System.out.println("Deleting user from database...");
        // SQL実行処理など
    }
    
    // バリデーション処理
    public boolean validateEmail() {
        // メールアドレスの形式チェック
        return email != null && email.contains("@");
    }
    
    public boolean validatePassword() {
        // パスワードの強度チェック
        return password != null && password.length() >= 8;
    }
    
    // 通知処理
    public void sendWelcomeEmail() {
        // ウェルカムメールの送信
        System.out.println("Sending welcome email to: " + email);
        // メール送信処理など
    }
    
    public void sendPasswordResetEmail() {
        // パスワードリセットメールの送信
        System.out.println("Sending password reset email to: " + email);
        // メール送信処理など
    }
    
    // ログ出力
    public void logUserActivity(String activity) {
        // ユーザーアクティビティのログ出力
        System.out.println("[LOG] User " + username + " performed: " + activity);
        // ログファイル書き込み処理など
    }
    
}
```