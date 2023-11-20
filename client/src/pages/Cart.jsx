import Heading from "../components/Heading";
import { useHomeContext } from "./HomeLayout";
const Cart = () => {
  const { cart } = useHomeContext();
  console.log(cart);
  return (
    <>
      <Heading heading={"Cart"} />
    </>
  );
};
export default Cart;
