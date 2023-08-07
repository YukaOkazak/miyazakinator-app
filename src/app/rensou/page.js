export default function Page() {
  return (
    <body background="/rensou-main.jpg">
      <h1>宮崎ゼミ26期生ですか？</h1>
      <button onclick="getAnswers('yes')">はい</button>
      <button onclick="getAnswers('yes')">たぶんそう部分的にそう</button>
      <button onclick="getAnswers('yes')">わからない</button>
      <button onclick="getAnswers('no')">たぶん違うそうでもない</button>
      <button onclick="getAnswers('no')">いいえ</button>
    </body>
  );
}
