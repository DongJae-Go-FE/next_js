let 상품 = ["Tomatoes", "Pasta", "Coconut"];

export default function List() {
  return (
    <div>
      <p>리스트임</p>
      <div>
        <h4 className="title">상품목록</h4>
        {상품.map((item, i) => {
          return (
            <div className="food" key={item}>
              <h4>{상품[i]} $40</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

//export default를 해야 자동으로 컴포넌트로 만든디.
