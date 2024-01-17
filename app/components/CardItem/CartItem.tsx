const CardItem = ({ name }: { name: string }) => {
  return (
    <div className="cart-item">
      <p>{name}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
};

export default CardItem;

//next.js에서는 두 가지 컴포넌트가 가능하다

//server component 랑 client component
//아무곳이나 대충 만드는 것은 서버 컴포넌트
//파일 최상단에 'use client'로 하는 것은 클라이언트 컴포넌트

//둘이 차이점
//server component
//1. html에 자바스크립트 삽입 불가 onClick 같은거 useState, useEffect 같은 것도

//client component
//1.client component 안에서는 html에 onClick useState등 삽입 가능

//? 그러면 클라이언트 컴포넌트가 좋은 거 아니야? 맞음
// 그러나
// 서버 컴포넌트들의 장점이 있다
// 1. 로딩이 빠름
//2. 검색 노출이 빠름

//클라이언트 컴포넌트는들은
// 로딩속도 느림 1 -자바스크립트 많이 필요
// 로딩속도 느림2 - 하이드레이션 필요
//hydration - html 을 유저에가 보낸후 자바스크립트로 html  다시 읽고 분석하는 일

//그래서
//큰페이지들은 서버 컴포넌트로
//큰페이지 안에서 기능이 필요한 것은 클라이언트 컴포넌트로 만들어라


//next.js 특징 같은 데이터 요청이 여러번 오면 하나로 통합을 해서 보내준다.