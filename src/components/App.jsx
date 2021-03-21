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
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Телефонный справочник</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <input type="search" name="" id="" />
          <button>Найти</button>

          <button>Добавить</button>
          <Table />
        </div>
        <div className="col-12 mt-3"> Пагинация: стр.1 из 12</div>
      </div>
      {/* <button
        onClick={() => {
          onTestButtonClick();
        }}
      >
        ADD TEST PHONE
      </button> */}
    </div>
  );
};

export default App;
