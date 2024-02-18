import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(userGet: any, userPost: any) {
  const client = await connectDB;
  const db = client.db("test");

  if (userGet.method === "POST") {
    let change = { title: userGet.body.title, content: userGet.body.content };
    db.collection("post").updateOne(
      { _id: new ObjectId(userGet.body._id) },
      { $set: change }
    );
    return userPost.redirect(302, "/board");
  }
}
