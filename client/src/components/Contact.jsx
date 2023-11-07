import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <section className="container  ">
      <h1 className="mb-8 text-2xl font-bold">
        Join our newsletter and get 20% off
      </h1>
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <p className="text-gray-700 mb-4 md:w-1/2  leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br /> Placeat sint unde quaerat ratione soluta veniam provident
          adipisci cumque eveniet tempore?
        </p>
        <form action="" className="flex justify-between md:w-1/2">
          <input
            type="text"
            className="border text-lg w-[70%] py-1 px-2 rounded-lg"
            placeholder="Enter Email ... "
          />
          <Link
            to="./register"
            className="text-lg py-1 px-2 rounded-lg bg-mainColor tracking-widest text-white font-bold"
          >
            Subscribe
          </Link>
        </form>
      </div>
    </section>
  );
};
export default Contact;
