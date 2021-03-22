import React, { useState } from "react";
import PropTypes from "prop-types";

import "./editable-table.less";

import PhoneEntryForm from "../phone-entry-form/PhoneEntryForm";
import Table from "../global/table/Table";
import InputSearch from "../global/input-search/InputSearch";
import Button from "../global/button/Button";
import Modal from "../global/modal/Modal";

const EditableTable = ({ titleList, rows, deleteCallback }) => {
  const [modalActive, setModalActive] = useState(false);
  console.log("titleList", titleList);
  console.log("rows", rows);
  return (
    <>
      <div className="editable-table">
        <div className="editable-table__wrapper">
          <div className="editable-table__input-wrapper">
            <InputSearch callback={() => {}} />
          </div>
          <Button onClick={() => setModalActive(true)}>Добавить</Button>
        </div>
        <Table
          titleList={titleList}
          rows={rows}
          deleteCallback={deleteCallback}
        />
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <PhoneEntryForm />
      </Modal>
    </>
  );
};

EditableTable.propTypes = {
  titleList: PropTypes.arrayOf(PropTypes.string).isRequired,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteCallback: PropTypes.func.isRequired,
};

export default EditableTable;
