import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(userGet: any, userPost: any) {
  const client = await connectDB;
  const db = client.db("todoList");

  if (userGet.method === "PUT") {
    db.collection("todoList").updateOne(
      { _id: new ObjectId(userGet.body._id) },
      {
        $set: { state: userGet.body.state },
      }
    );

    return userPost.redirect(302, "/todo");
  }
}
