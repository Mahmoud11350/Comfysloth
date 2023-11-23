import FormRow from "../components/FormRow";
import { Form, Link, redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/register", data);
    return redirect("/products");
  } catch (error) {
    return null;
  }
};
const Register = () => {
  return (
    <section className="">
      <div className="max-w-[350px] m-auto bg-mainColor p-8 rounded-xl">
        <h1 className="text-3xl text-center mb-5 uppercase font-bold tracking-wider	text-white">
          Register
        </h1>
        <Form method="post">
          <FormRow name={"name"} type={"text"} />
          <FormRow name={"email"} type={"email"} />
          <FormRow name={"password"} type={"password"} />
          <button
            className="py-2 px-4 rounded text-center font-bold text-lg tracking-wide  bg-blue-950 text-white"
            type="submit"
          >
            Register
          </button>
        </Form>
        <h2 className="text-md font-semibold mt-4">
          Already a Member !{" "}
          <Link
            to="/login"
            className="py-1 px-2 rounded  font-bold bg-blue-950 text-white"
          >
            Login
          </Link>
        </h2>
      </div>
    </section>
  );
};
export default Register;
