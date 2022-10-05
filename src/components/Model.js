// import Create from "./Create";
const Model = (props) => {
  return props.modelState ? (
    <div className="fixed inset-0 w-full h-full bg-black/50 flex justify-center items-center">
      <div className="bg-white px-6 py-10 w-10/12 sm:w-[500px] h-auto rounded-sm ">
        {/* <Create closeForm={props.close} /> */}
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};
export default Model;
