export default function handler(userGet: any, userPost: any) {
  console.log(1, 2, 3);

  if (userGet.method === "POST") {
    return userPost.status(200).json(new Date());
  }

  if (userGet.method === "GET") {
    return userPost.status(200).json(new Date());
  }
}

//서버에서 응답이 없으면 무한으로 응댑해줄 떄까지 기다린다.
//유저에게 응답을 해줘야한다.

//서버 기능 성공기 status에 200
//서비 문제 500
//유저 잘못시 400
