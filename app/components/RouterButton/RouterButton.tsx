"use Client";

import { usePathname, useRouter } from "next/navigation";

const RouterButton = ({
  children,
  color,
}: {
  children: string;
  color: string;
}) => {
  let router = useRouter();
  let url = usePathname(); // 현재 url 출력
  //useSearchParams search parameter (query string) 출력
  //useParams() 쓰면 [dynamic route]에 입력한내용 (URL 파라미터) 을 출력
  return (
    <button
      style={{ backgroundColor: color }}
      onClick={() => {
        router.push("/");
      }}
    >
      {children}
    </button>
  );
};

export default RouterButton;


//Link 버튼 대신 라우터 시키는 방법
//useRouter를 써라
//push() - 괄호 안에 입력한 경로로 이동
//back() - 뒤로가기
//forward() - 앞으로 가기
//refresh() - 새로고침 단 브라우저 새로고침이 아니라 바뀐내용만 새로고침이다. 변동사항이 있는 일부분만 바꿔준다.
//prefetch() - 괄호 안에 페이지 경로를 미리로드 시켜 놓은다. - 매우 빠르게 페이지를 로드 시킬 수 있따. 