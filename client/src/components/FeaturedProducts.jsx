import { Link } from "react-router-dom";

const FeaturedProducts = ({ featuredProducts }) => {
  return (
    <section>
      <h1 className="afterLine text-2xl text-center font-bold mb-14 tracking-widest ">
        Featured Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 container">
        {featuredProducts.map((product) => {
          const { name, price, image, _id } = product;
          return (
            <Link to={`product/${_id}`}>
              <div className="mb-4">
                <img
                  src={image}
                  alt={name}
                  className="h-[230px] w-full rounded-lg"
                />
              </div>
              <div className="flex items-center justify-between capitalize font-semibold  ">
                <p>{name}</p>
                <p>{price} $</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
export default FeaturedProducts;
