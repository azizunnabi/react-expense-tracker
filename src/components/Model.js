const Model = (props) => {
  return props.modelState ? (
    <div className="fixed inset-0 w-full h-full bg-black/50 flex justify-center items-center">
      <div className="bg-white p-6 w-[500px] h-auto rounded-sm">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
        perspiciatis officiis eius aliquid sunt nam quidem minus voluptates!
        Provident sapiente minus id est temporibus enim vel in blanditiis
        incidunt facilis.
      </div>
    </div>
  ) : (
    ""
  );
};
export default Model;
