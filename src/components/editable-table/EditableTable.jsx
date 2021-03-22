import React, { useState } from "react";

import "./editable-table.less";

import Table from "../global/table/Table";
import InputSearch from "../global/input-search/InputSearch";
import Button from "../global/button/Button";
import Modal from "../global/modal/Modal";

const EditableTable = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <div className="editable-table">
        <div className="editable-table__wrapper">
          <div className="editable-table__input-wrapper">
            <InputSearch />
          </div>
          <Button onClick={() => setModalActive(true)}>Добавить</Button>
        </div>
        <Table />
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <div className="di">21321</div>
      </Modal>
    </>
  );
};

export default EditableTable;
