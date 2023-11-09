const ProductImage = ({ product }) => {
  const { image, name } = product;
  return (
    <div className="p-4">
      <img src={image} alt={name} className="rounded-lg max-h-[450px] w-full" />
    </div>
  );
};
export default ProductImage;
