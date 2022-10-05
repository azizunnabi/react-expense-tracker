// import React from "react";
import { useState } from "react";
const Create = (props) => {
  // const [state, setState] = React.useState('')
  const [money, setMoney] = useState(0);
  const [message, setMessage] = useState("");
  const submitForm = (event) => {
    event.preventDefault();
    props.createRecord({
      // money:money
      money,
      // message: message
      message,
    });
    setMoney(0);
    setMessage("");
  };
  return (
    <form onSubmit={submitForm}>
      <h1 className="text-lg capitalize font-medium text-gray-800 mb-4">
        add new record
      </h1>
      <div>
        <label
          htmlFor="money"
          className="block capitalize text-sm text-gray-500 font-medium mb-1"
        >
          money
        </label>
        <input
          type="number"
          name=""
          id="money"
          placeholder="money..."
          className="border w-full px-4 py-2.5 rounded-md outline-none"
          onChange={(event) => setMoney(event.target.value)}
          value={money}
        />
      </div>
      <div className="mt-4">
        <label
          htmlFor="message"
          className="block capitalize text-sm text-gray-500 font-medium mb-1"
        >
          message
        </label>
        <input
          type="text"
          name=""
          id="message"
          placeholder="message..."
          className="border w-full px-4 py-2.5 rounded-md outline-none"
          onChange={(event) => setMessage(event.target.value)}
          value={message}
        />
      </div>
      <div className="mt-6">
        <button className="capitalize bg-emerald-600 text-white font-semibold text-sm rounded px-4 py-3">
          create new record
        </button>
        <button
          className="ml-5 capitalize bg-rose-600 text-white font-semibold text-sm rounded px-6 py-3"
          onClick={(event) => {
            event.preventDefault();
            props.closeForm();
          }}
        >
          Close
        </button>
      </div>
    </form>
  );
};
export default Create;
