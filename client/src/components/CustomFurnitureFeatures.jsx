import featureLinks from "../utils/cutomFurnitureFeatures";
const CustomFurnitureFeatures = () => {
  return (
    <div className="container  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      {featureLinks.map((feature) => {
        return (
          <div className="bg-mainColor/70 mb-8 text-center py-10 w-fit rounded-xl">
            <div className="flex items-center w-[70px] h-[70px] rounded-full bg-mainColor/10  m-auto">
              {feature.icon}
            </div>
            <h2 className="text-2xl font-bold my-4">{feature.name}</h2>
            <p className="">{feature.explan}</p>
          </div>
        );
      })}
    </div>
  );
};
export default CustomFurnitureFeatures;
