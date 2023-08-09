import { test } from "node:test";

export default function Page() {
  return (
<<<<<<< HEAD
    <body background="/aishou-main.jpg">
=======
    <body background = "/aishou-main.jpg">

>>>>>>> 70899d54394a8a93ed3852304615b631e54d67d8
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
    </body>
  )
}