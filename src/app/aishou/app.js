const mysql = require("mysql");

// MySQLデータベース接続の設定
const connection = mysql.createConnection({
  host: "localhost",
  user: "ユーザー名",
  password: "パスワード",
  database: "データベース名",
});

// データベース接続
connection.connect((err) => {
  if (err) {
    console.error("データベースに接続できませんでした:", err);
    return;
  }
  console.log("データベースに接続しました！");
});

// ルートページの設定
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// 質問に対する回答によって絞り込んだデータを返すAPI
app.get("/answers/:response", (req, res) => {
  const response = req.params.response;
  let query = "";

  // Yesの場合は宮崎ゼミ26期生に絞り込み
  if (response === "yes") {
    query = "SELECT * FROM students WHERE is_26th_generation = 1";
  } else if (response === "no") {
    // Noの場合は宮崎ゼミ26期生以外に絞り込み
    query = "SELECT * FROM students WHERE is_26th_generation = 0";
  } else {
    // その他の回答の場合はすべてのデータを返す
    query = "SELECT * FROM students";
  }

  // データベースクエリの実行
  connection.query(query, (err, results, fields) => {
    if (err) {
      console.error("データベースクエリの実行エラー:", err);
      res.status(500).json({ error: "データベースエラーが発生しました" });
    } else {
      res.json(results);
    }
  });
});

// サーバーの起動
app.listen(port, () => {
  console.log(`サーバーがポート${port}で起動しました`);
});
