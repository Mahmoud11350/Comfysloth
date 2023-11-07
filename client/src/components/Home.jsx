import DesignImg from "./DesignImg";
import DesignInfo from "./DesignInfo";

const Home = () => {
  return (
    <div className="flex items-center justify-between container mb-20 mt-1">
      <DesignInfo />
      <DesignImg />
    </div>
  );
};
export default Home;
