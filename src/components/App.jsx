import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";

import { addPhone, deletePhone } from "../reducers/phoneReducers.js";

import Button from "../components/global/button/Button";
import EditableTable from "./editable-table/EditableTable";

const App = () => {
  const dispatch = useDispatch();
  const phone = useSelector((state) => state.phone.phoneList);

  const addDummyData = () => {
    if (!phone.length) {
      dispatch(addPhone({ name: "Leanne Graham", phone: "+7 (912)-24-28-99" }));
      dispatch(addPhone({ name: "Ervin Howell", phone: "010-692-6593" }));
      dispatch(addPhone({ name: "Clementine Bauch", phone: "1-463-123-4447" }));
      dispatch(addPhone({ name: "Patricia Lebsack", phone: "493-170-9623" }));
      dispatch(addPhone({ name: "Chelsey Dietrich", phone: "(254)954-1289" }));
    }
  };

  const addPhoneEntity = (name, phone) => {
    dispatch(addPhone({ name, phone }));
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
      {!phone.length ? (
        <>
          <hr />
          <Button
            onClick={() => {
              addDummyData();
            }}
          >
            ADD TEST DATA
          </Button>
        </>
      ) : null}
    </div>
  );
};

export default App;
