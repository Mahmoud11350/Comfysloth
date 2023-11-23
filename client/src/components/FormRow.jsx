const FormRow = ({ name, type }) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={name} className="mb-2 font-xl font-bold capitalize">
        {name}
      </label>
      <input
        type={type}
        className="py-1 px-4 rounded outline-none"
        name={name}
      />
    </div>
  );
};
export default FormRow;
