import { connectDB } from "@/util/database";
import Button from "../components/Button/Button";
import DelButton from "../components/DelButton/DelButton";
import CheckBox from "../components/Checkbox/CheckBox";

export default async function Todo() {
  const client = await connectDB;
  const db = client.db("todoList");
  const result = await db.collection("todoList").find().toArray();

  return (
    <div className="w-96 m-auto form">
      <h2 className="text-center text-2xl mb-10">Tailwindcss TodoList</h2>
      <form action="GET">
        <ul className="mb-10">
          {result.map((item, index) => {
            return (
              <li className="flex items-center w-full" key={index}>
                <CheckBox id={item._id.toString()} state={item.state} />
                <p className="w-20 flex-1 mx-5">{item.todo}</p>
                <DelButton type="button" id={item._id.toString()}>
                  삭제
                </DelButton>
              </li>
            );
          })}
        </ul>
      </form>
      <form action="api/todo" method="POST">
        <div className="flex items-center">
          <input type="text" name="todo" />
          <Button type="submit">추가</Button>
        </div>
      </form>
    </div>
  );
}
