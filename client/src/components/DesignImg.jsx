import mainHomeImg from "../assets/imgs/mainHomeImg.jpeg";
import homeImg from "../assets/imgs/homeImg.jpeg";
const DesignImg = () => {
  return (
    <div className="hidden lg:block max-w-[700px] max-h-[500px] relative ">
      <img
        src={mainHomeImg}
        alt="main home img "
        className="h-[500px] w-[600px] rounded-lg"
      />
      <img
        src={homeImg}
        alt="home img"
        className="absolute -bottom-8 w-[200px] -left-24 rounded-lg"
      />
    </div>
  );
};
export default DesignImg;
