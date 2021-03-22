import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";

import { addPhone, deletePhone } from "../reducers/phoneReducers.js";

import EditableTable from "./editable-table/EditableTable";
import PhoneEntryForm from "./phone-entry-form/PhoneEntryForm.jsx";

const App = () => {
  const dispatch = useDispatch();
  const phone = useSelector((state) => state.phone.phoneList);

  // const onTestButtonClick = () => {
  //   dispatch(addPhone({ name: "Leanne Graham", phone: "1-770-736-8031" }));
  //   dispatch(addPhone({ name: "Ervin Howell", phone: "010-692-6593" }));
  //   dispatch(addPhone({ name: "Clementine Bauch", phone: "1-463-123-4447" }));
  //   dispatch(addPhone({ name: "Patricia Lebsack", phone: "493-170-9623" }));
  //   dispatch(addPhone({ name: "Chelsey Dietrich", phone: "(254)954-1289" }));
  // };

  const addPhoneEntity = (name, phone) => {
    dispatch(addPhone({ name, phone }));
  };

  // const dummyData = [
  //   { id: 1, name: "Leanne Graham", phone: "1-770-736-8031" },
  //   { id: 2, name: "Ervin Howell", phone: "010-692-6593" },
  //   { id: 3, name: "Clementine Bauch", phone: "1-463-123-4447" },
  //   { id: 4, name: "Patricia Lebsack", phone: "493-170-9623" },
  //   { id: 5, name: "Chelsey Dietrich", phone: "(254)954-1289" },
  // ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Телефонный справочник</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <EditableTable
            titleList={["id", "Имя", "Номер телефона"]}
            rows={phone}
            deleteCallback={(id) => {
              dispatch(deletePhone({ id }));
            }}
            addCallback={(name, phone) => {
              addPhoneEntity(name, phone);
            }}
          />
        </div>
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
