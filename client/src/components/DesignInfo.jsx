import { Link } from "react-router-dom";
const DesignInfo = () => {
  return (
    <div className="flex flex-col max-w-[400px] m-auto text-center my-8">
      <h1 className="text-4xl font-bold mb-4">Design Your Comfort Zone</h1>
      <p className="text-gray-600 mb-4  text-left tracking-wide leading-8">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed
        omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam
        odio ducimus, obcaecati libero et quia tempora excepturi quis alias?
      </p>
      <Link
        className="py-2 px-4 bg-mainColor w-fit m-auto rounded text-white font-bold"
        to={"./products"}
      >
        Shop now
      </Link>
    </div>
  );
};
export default DesignInfo;
