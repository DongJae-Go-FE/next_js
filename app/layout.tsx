import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";
import "../css/output.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div className="navbar">
          <Link href="/">home</Link>
          <Link href="/list">list페이지</Link>
          <Link href="/cart">cart</Link>
          <Link href="/board">게시판</Link>
          <Link href="/write">글작성</Link>
          <Link href="/todo">투두</Link>
        </div>
        {children}
      </body>
    </html>
  );
}

//여기에 코드를 짜면 왜 nav바가 고정이야?

//page.tsx를 보여줄때
//page.tsx 옆에 layout.tsx 가 있으면 그걸로 page.tsx를 감쌈
//상위폴더에 layout.tsx가 있으면 그걸로 1번 싸맴
// 그 상위폴더에 layout.tsx가 또 있으면 그걸고 또 싸맴
//page 변경 없이 공통적으로 계속 보열줄 ui가 있으면 layout.tsx가 편할 듯?
