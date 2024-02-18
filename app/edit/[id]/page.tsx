import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props: any) {
  const client = await connectDB;
  const db = client.db("test");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });
  console.log(result);
  return (
    <div className="p-20">
      <h4>글작성</h4>
      <form action="api/edit" method="POST">
        <input
          className="input"
          type="text"
          name="title"
          defaultValue={result?.title}
        />
        <input
          className="input"
          type="text"
          name="content"
          defaultValue={result?.content}
        />
        <input
          type="text"
          name="_id"
          style={{ display: "none" }}
          defaultValue={result?._id.toString()}
        />

        <button type="submit" className="button">
          버튼
        </button>
      </form>
    </div>
  );
}
