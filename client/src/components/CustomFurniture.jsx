import CustomFurnitureFeatures from "./CustomFurnitureFeatures";
import CustomFurnitureInfo from "./CustomFurnitureInfo";

const CustomFurniture = () => {
  return (
    <section className="flex flex-col  bg-mainColor/20 ">
      <CustomFurnitureInfo />
      <CustomFurnitureFeatures />
    </section>
  );
};
export default CustomFurniture;
