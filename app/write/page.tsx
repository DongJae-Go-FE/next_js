export default function Write() {
  return (
    <div className="p-20">
      <h4>글작성</h4>
      <form action="api/list" method="POST">
        <input className="input" type="text" name="title" />
        <input className="input" type="text" name="content" />

        <button type="submit" className="button">
          버튼
        </button>
      </form>
    </div>
  );
}
//서버로 post 요청을 한다.
//
