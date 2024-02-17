import { connectDB } from "@/util/database";

export default async function handler(userGet: any, userPost: any) {
  const client = await connectDB;
  const db = client.db("test");

  if (userGet.method === "POST") {
    if (userGet.body.title === "") {
      return userPost.status(500).json("타이틀 공백이야!!!");
    } else {
      db.collection("post").insertOne(userGet.body);
      return userPost.redirect(302, "/board");
    }
  }

  if (userGet.method === "GET") {
    db.collection("post").insertOne(userGet.body);
    return userPost.status(200).json("발행완료");
  }

  // 서버 에러
  try {
    let db = (await connectDB).db("test");
    db.collection("post").insertOne(userGet.body);
    userPost.redirect(302, "/board");
  } catch (error) {
    alert(error);
  }
}
