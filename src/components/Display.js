import Currency from "currency-formatter";
import History from "./History";
const Display = (props) => {
  return (
    <div className="w-full sm:w-[500px] my-5">
      <div className="bg-indigo-600 rounded p-10 w-full text-center">
        <div className="capitalize text-white text-base">total balance</div>
        <h1 className="text-4xl text-white font-semibold mt-2">
          {Currency.format(props.myData.balance, { code: "USD" })}
        </h1>
      </div>
      {/* close total balance */}
      <div className="flex flex-wrap my-5">
        <div className="w-full sm:w-6/12 bg-emerald-50 rounded p-10 text-center">
          <h5 className="text-emerald-600 capitalize">total income</h5>
          <h1 className="text-3xl font-semibold text-emerald-500">
            {Currency.format(props.myData.income, { code: "USD" })}
          </h1>
        </div>
        {/* clsoe income */}
        <div className="w-full sm:w-6/12 bg-rose-50 rounded p-10 text-center">
          <h5 className="text-rose-600 capitalize">total expenses</h5>
          <h1 className="text-3xl font-semibold text-rose-500">
            {Currency.format(props.myData.expenses, { code: "USD" })}
          </h1>
        </div>
        <History history={props.myData.history} />
      </div>
    </div>
  );
};
export default Display;
