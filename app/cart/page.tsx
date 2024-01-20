import Title from "../components/Title/Title";
import CardItem from "../components/CardItem/CartItem";
import Button from "../components/Button/Button";

export default function Payment() {
  let data = ["tomato", "tab", "sdf"];

  return (
    <div>
      <Title />
      <div>
        <h4 className="title">Cart</h4>
        <CardItem name={data[0]} />
        <CardItem name={data[1]} />
        <CardItem name={data[2]}/>
      </div>
      <Button color="red">빨강 버튼.</Button>
      <Button color="blue">파랑 버튼</Button>
    </div>
  );
}
