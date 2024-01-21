"use client";

import Image from "next/image";
import Food01 from "@/public/food0.png";
import { useState } from "react";

let 상품 = ["Tomatoes", "Pasta", "Coconut"];

export default function List() {
  const [counter, setCounter] = useState(
    상품.map(() => {
      return 1;
    })
  );

  console.log(counter);

  return (
    <div>
      <p>리스트임</p>
      <div>
        <h4 className="title">상품목록</h4>
        {상품.map((item, i) => {
          return (
            <div className="food" key={item}>
              <Image src={Food01} alt="토미토" />
              <h4>{상품[i]} $40</h4>
              <span>{counter[i]}</span>
              <button
                onClick={() => {
                  let arr = [...counter];
                  arr[i]++;
                  setCounter(arr);
                  console.log(counter);
                }}
              >
                +
              </button>
              <button
                onClick={() => {
                  let arr = [...counter];
                  arr[i]--;
                  setCounter(arr);
                  console.log(counter);
                }}
              >
                -
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

//export default를 해야 자동으로 컴포넌트로 만든디.

//일반 이미지 <img src={경로}> 나 import
//public 폴더 안에 있는 파일들은 사이트 발행을 할 때 바로 root로 이동하기 때문에
// /파일 경로로 바로 하면됩니다.

//              <img src="/food0.png" alt="토미토" />
//이미지 최적화 방법
//lazy loading
//사이즈 최적화
//layout shift 방지 >> 이미지 로딩이 밀려서 레이아웃 깨지는 거

//next Image 쓰면 자동으로 위에거 해준다. 대신 무조건 import해야함
//그리고 url 외부 이미지를 써야하면 width와 height 값이 무조건 있어야함
// 거기에다 next.config셋팅도 해야하는데
