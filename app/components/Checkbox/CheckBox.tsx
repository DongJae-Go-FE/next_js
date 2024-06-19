"use client";

const CheckBox = ({ state, id }: { state: boolean; id: any }) => {
  const handlePutBtnClick = async (id: any, state: boolean) => {
    try {
      const response = await fetch("/api/todo", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id: id, state: state }),
      });
      if (!response.ok) {
        throw new Error("네트워크 응답이 올바르지 않습니다.");
      }
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  return (
    <input
      type="checkbox"
      className="checkbox"
      defaultChecked={state === true}
      name="state"
      onClick={(e) => {
        handlePutBtnClick(id, e.currentTarget.checked);
      }}
    />
  );
};

export default CheckBox;
