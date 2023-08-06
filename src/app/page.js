import Image from "next/image";

export default function Home() {
  return (
    <div>
      <img src="/top.jpg" alt="top"></img>
      <a href="/select" class="absolute">
        <img src="/top-play.jpg" alt="play"></img>
      </a>
    </div>
  );
}
