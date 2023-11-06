import LogoImg from "../assets/imgs/Logo.svg";
const Logo = () => {
  return (
    <div className="w-[200px]">
      <img src={LogoImg} alt="ComfySloth" className="max-w-full" />
    </div>
  );
};
export default Logo;
