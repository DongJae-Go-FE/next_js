import { connectDB } from "@/util/database";

export default async function handler(userGet: any, userPost: any) {
  const client = await connectDB;
  const db = client.db("test");
  const result = await db.collection("post").find().toArray();

  if (userGet.method === "POST") {
    console.log(userPost.body)
    return userPost.status(200).json(result);
  }

  if (userGet.method === "GET") {
    return userPost.status(200).json(result);
  }
}
