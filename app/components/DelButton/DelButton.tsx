'use client';

const handleDeleteBtnClick = async (id:any) => {
  console.log(id);
  try {
    const response = await fetch("/api/todoDel", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: id }),
    });
    history.go(0);
    if (!response.ok) {
      throw new Error("네트워크 응답이 올바르지 않습니다.");
    }

  } catch (error) {
    console.error(error);

  }
};

const DelButton = ({ children, id, type }: { type?:"button"|"submit"; children: string; id:any}) => {
  return <button type={type} className="Pretendard ml-5" onClick={()=>{handleDeleteBtnClick(id)}}>{children}</button>;
};

export default DelButton;
