import mainHomeImg from "../assets/imgs/mainHomeImg.jpeg";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
const About = () => {
  return (
    <>
      <section>
        <Heading heading={"about"} />
        <div className="container mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img
            src={mainHomeImg}
            alt="main home img "
            className=" w-[500px] h-[500px] rounded-lg"
          />
          <div>
            <h2 className="text-2xl capitalize mb-8 font-bold tracking-widest relative afterLine w-fit">
              our story
            </h2>
            <p className="mb-4 leading-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              accusantium sapiente tempora sed dolore esse deserunt eaque
              excepturi, delectus error accusamus vel eligendi, omnis beatae.
              Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
              dolore, obcaecati incidunt sequi blanditiis est exercitationem
              molestiae delectus saepe odio eligendi modi porro eaque in libero
              minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
              ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
              similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
              iste.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default About;
