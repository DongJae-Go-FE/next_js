import { connectDB } from "@/util/database";
import Link from "next/link";
import RouterButton from "@/app/components/RouterButton/RouterButton"

export default async function Board() {
  const client = await connectDB;
  const db = client.db("test");
  // 해당 collection 의 모든 데이터를 가져옴.
  const result = await db.collection("post").find().toArray();

  console.log(result);
  return (
    <div>
      <p>{result[0].title}</p>
      <p>{result[0].content}</p>
      <div className="list-bg">
        {result.map((item, index) => {
          return (
            <div className="list-item" key={index}>
              <Link href={`/detail/${item._id}`}>링크</Link>
              <h4>{item.title}</h4>
              <p>{item.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

//db 입출력 코드는 서버 컴포넌트 안에서만 씁시다.

// 서버 메소드 정리
//GET 서버에서 요청
//POST 입력한 값을 서버에 보낼때
//PUT, PATCH 요창힌 깂을 수정할 때
//DELETE 값을 지울 때