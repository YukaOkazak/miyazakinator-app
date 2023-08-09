import { useState } from "react";
import sqlite3 from "sqlite3";

export default function Page() {
  const [filteredData, setFilteredData] = useState([]);

  const fetchDataFromDatabase = () {
    const [filteredData, setFilteredData] = useState([]);

    // SQLiteクエリを実行してデータを絞り込む
    db.all("SELECT * FROM your_table_name WHERE condition;", [], (err, rows) => {
      if (err) {
        console.error("データベースクエリの実行エラー:", err.message);
      } else {
        setFilteredData(rows);
      }

      db.close();
    });
  };

  // コンポーネントがマウントされた直後にデータを取得
  fetchDataFromDatabase();


  return (
    <body background="/rensou-main.jpg">
      <a href="/yes" class="yes">
        <img src="/yes.jpg" alt="はい"></img>
      </a>
      <a href="/maybe-yes" class="maybe-yes">
        <img src="/maybe-yes.jpg" alt="たぶんそう部分的にそう"></img>
      </a>
      <a href="/unknown" class="unknown">
        <img src="/unknown.jpg" alt="わからない"></img>
      </a>
      <a href="/maybe-no" class="maybe-no">
        <img src="/maybe-no.jpg" alt="たぶん違うそうでもない"></img>
      </a>
      <a href="/no" class="no">
        <img src="/no.jpg" alt="いいえ"></img>
      </a>
      <div>
        <h1>SQLiteデータ絞り込みページ</h1>
        <ul>
          {filteredData.map((row) => (
            <li key={row.id}>
              {row.column1}, {row.column2}
            </li>
          ))}
        </ul>
      </div>
    </body>
  );
}
