import { connectDB } from "@/util/database";

export default async function handler(userGet: any, userPost: any) {
  const client = await connectDB;
  const db = client.db("test");
  db.collection("post").insertOne({
    title: userGet.body.title,
    content: userGet.body.content,
  });
  const result = await db.collection("post").find().toArray();

  if (userGet.method === "POST") {
    return userPost.status(200).json(result);
  }

  if (userGet.method === "GET") {
    return userPost.status(200).json(result);
  }
}
