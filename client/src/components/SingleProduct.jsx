import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";

const SingleProduct = ({ _id, name, price, image }) => {
  return (
    <Link to={`/product/${_id}`} className="">
      <div className="overlay">
        <div className="center ">
          <IoSearchSharp className="text-white text-5xl" />
        </div>
        <img src={image} alt={name} className="h-[300px] w-full rounded-lg" />
      </div>
      <div className="flex items-center justify-between p-4 capitalize">
        <h4 className="font-semibold ">{name}</h4>
        <h4 className="font-bold">{price} $</h4>
      </div>
    </Link>
  );
};
export default SingleProduct;
