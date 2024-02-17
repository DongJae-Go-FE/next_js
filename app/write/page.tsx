export default function Write() {
  return (
    <div>
      <h4>글작성</h4>
      <form action="api/list" method="POST">
        <input type="text" name="title" />
        <input type="text" name="content" />

        <button type="submit">버튼</button>
      </form>
    </div>
  );
}
//서버로 post 요청을 한다.
//
