import sqlite3 from "sqlite3";

export function fetchDataFromDatabase(answer, callback) {
  const db = new sqlite3.Database("miyazakinator.db"); // データベースファイルのパスを指定

  let condition = "";

  switch (answer) {
    case "yes":
      condition = "column_name = 'はい'";
      break;
    case "maybe-yes":
      condition = "column_name = 'たぶんそう部分的にそう'";
      break;
    // 他の条件も追加

    default:
      condition = "1"; // デフォルトの条件
  }

  db.all(
    `SELECT * FROM your_table_name WHERE ${condition};`,
    [],
    (err, rows) => {
      if (err) {
        console.error("データベースクエリの実行エラー:", err.message);
      } else {
        callback(rows);
      }

      db.close();
    }
  );
}
