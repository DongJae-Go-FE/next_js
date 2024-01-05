import Image from "next/image";
import styles from "./page.module.css";

//리액트 문법으로 넣는다.

let test = "변수삽입";

export default function Home() {
  return (
    <div>
      <h4 className="red" style={{ fontSize: "20px" }}>
        안녕
      </h4>
      <p>react링 다른 거 없음</p>
      <p>{test}</p>
    </div>
  );
}
