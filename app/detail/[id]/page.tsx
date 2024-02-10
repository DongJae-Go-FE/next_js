//다이나믹 라우터를 쓰면 폴더 하나로 무한히 페이지를 만들 수 있다.
//[작명] => 작명한 명으로 라우팅을 시켜준다.

import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Detail(props: any) {
  const client = await connectDB;
  const db = client.db("test");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });
  return (
    <div>
      <h4>상세페이지임</h4>
      <h4>{result?.title}</h4>
      <p>{result?.content}</p>
    </div>
  );
}
