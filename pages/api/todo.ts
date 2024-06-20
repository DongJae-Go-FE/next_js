import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(userGet: any, userPost: any) {
  const client = await connectDB;
  const db = client.db("todoList");
  try {
    if (userGet.method === "POST") {
      db.collection("todoList").insertOne({
        todo: userGet.body.todo,
        state: false,
      });
      return userPost.redirect(302, "/todo");
    }

    if (userGet.method === "DELETE") {
      db.collection("todoList").deleteOne({
        _id: new ObjectId(userGet.body._id),
      });

      return userPost.redirect(302, "/todo");
    }

    if (userGet.method === "PUT") {
      db.collection("todoList").updateOne(
        { _id: new ObjectId(userGet.body._id) },
        {
          $set: { state: userGet.body.state },
        }
      );

      return userPost.redirect(302, "/todo");
    }
  } catch (e) {
    alert(e);
  }
}
//