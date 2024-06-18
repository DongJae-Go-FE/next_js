import { connectDB } from "@/util/database";

export default async function handler(userGet: any, userPost: any) {
  const client = await connectDB;
  const db = client.db("todoList");

  if (userGet.method === "POST") {
    db.collection("todoList").insertOne({
      todo: userGet.body.todo,
      state: false,
    });
    return userPost.redirect(302, "/todo");
  }
}
