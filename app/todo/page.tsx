import { connectDB } from "@/util/database";
import Button from "../components/Button/Button";
import DelButton from "../components/DelButton/DelButton";
import CheckBox from "../components/\bCheckbox/CheckBox";

export default async function Todo(props: any) {
  const client = await connectDB;
  const db = client.db("todoList");
  // 해당 collection 의 모든 데이터를 가져옴.
  const result = await db.collection("todoList").find().toArray();

  return (
    <div className="w-96 m-auto">
      <h2 className="text-center text-2xl mb-10">테일윈드 투두리스트</h2>
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
