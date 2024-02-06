import { connectDB } from "@/util/ database";

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
    </div>
  );
}


//db 입출력 코드는 서버 컴포넌트 안에서만 씁시다.