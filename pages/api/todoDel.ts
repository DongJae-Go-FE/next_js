import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(userGet: any, userPost: any) {
  const client = await connectDB;
  const db = client.db("todoList");

  if (userGet.method === "DELETE") {
    db.collection("todoList").deleteOne({ _id: new ObjectId(userGet.body._id) });
    
    return userPost.redirect(302, "/todo");
  }
}
