import { ReactNode } from "react";

export default function Layout({ children }:{children:ReactNode}) {
  return (
    <div>
      {children}
      <p>현대카드 무이자이벤트중</p>
    </div>
  );
}
