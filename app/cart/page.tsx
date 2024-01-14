import Title from "../components/Title/Title";
import CardItem from "../components/CardItem/CartItem";

export default function Payment() {
  return (
    <div>
      <Title/>
      <div>
        <h4 className="title">Cart</h4>
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    </div>
  );
}
