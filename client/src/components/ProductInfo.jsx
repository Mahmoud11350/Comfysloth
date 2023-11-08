const ProductInfo = ({ product }) => {
  const { name, price, description, shipping, company, colors } = product;
  const reviews = Array.from({ length: 5 }, (_, index) => index);
  return (
    <div>
      <h2>{name}</h2>
      {reviews.map((review) => (
        <h1>star</h1>
      ))}
      <span>{price}</span>
      <p>{description}</p>
      <p>Avalible : {shipping == true ? "in stock" : "out of stock"}</p>
      <p>Brand : {company}</p>
      <hr />
      <p>
        Colors :
        {colors.map((color) => (
          <span className={`block w-8 h-8 rounded-full bg-[${color}]`}></span>
        ))}
      </p>
    </div>
  );
};
export default ProductInfo;
