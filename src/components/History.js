import Currency from "currency-formatter";
const History = (props) => {
  return props.history.length > 0 ? (
    props.history.map((his) => {
      return Number(his.money) > 0 ? (
        <div className="flex justify-between w-full mt-2 bg-emerald-50 text-emerald-600 px-3 py-2.5">
          <span>{his.message}</span>
          <span className="font-semibold">
            {Currency.format(his.money, { code: "USD" })}
          </span>
        </div>
      ) : (
        <div className="flex justify-between w-full mt-2 bg-rose-50 text-rose-600 px-3 py-2.5">
          <span>{his.message}</span>
          <span className="font-semibold">
            {Currency.format(his.money, { code: "USD" })}
          </span>
        </div>
      );
    })
  ) : (
    <p className="mt-3 bg-rose-50 text-rose-700 rounded px-3 py-2.5 capitalize w-full">
      no history found
    </p>
  );
};
export default History;
