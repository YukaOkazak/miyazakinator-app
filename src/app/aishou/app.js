const sqlite3 = require("sqlite3").verbose();
const dbPath = "miyazakinator.db"; // SQLiteデータベースファイルのパスを指定

// データベースに接続
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("データベースに接続できませんでした:", err.message);
  } else {
    console.log("データベースに接続しました。");

    // データベースからデータを取得
    db.all("SELECT * FROM your_table_name", [], (err, rows) => {
      if (err) {
        console.error("データベースクエリの実行エラー:", err.message);
      } else {
        // 取得したデータを表示
        console.log("取得したデータ:");
        console.log(rows);
      }

      // データベース接続を閉じる
      db.close((err) => {
        if (err) {
          console.error(
            "データベースの接続を閉じる際にエラーが発生しました:",
            err.message
          );
        }
        console.log("データベースの接続が閉じられました。");
      });
    });
  }
});
