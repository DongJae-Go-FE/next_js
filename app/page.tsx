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

//next.js는 폴더 하나만 만들면 자동으로 라우팅이 됩니다.
//app 폴더에 폴더를 하나 만든다. 그 폴더 안에 page.tsx
//폴더명으로 링크 접속을 하면 접속이 됩니다.
