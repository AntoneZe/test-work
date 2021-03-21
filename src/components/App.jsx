import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";

import Table from "./global/table/Table";
import { addPhone } from "../reducers/phoneReducers.js";

const App = () => {
  const dispatch = useDispatch();
  const phone = useSelector((state) => state.phone.phone);

  const onTestButtonClick = () => {
    dispatch(addPhone("8-800-555-3535"));
  };

  return (
    <div>
      <h1>{phone}</h1>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Table />
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          onTestButtonClick();
        }}
      >
        ADD TEST PHONE
      </button>
    </div>
  );
};

export default App;
