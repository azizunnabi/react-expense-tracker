const Button = (props) => {
  return (
    <button
      className="inline-block bg-emerald-600 text-white rounded px-7 text-base font-medium py-2.5 capitalize"
      onClick={props.open}
    >
      Add expense
    </button>
  );
};
export default Button;
