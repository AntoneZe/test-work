import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./editable-table.less";

import PhoneEntryForm from "../phone-entry-form/PhoneEntryForm";
import Table from "../global/table/Table";
import InputSearch from "../global/input-search/InputSearch";
import Button from "../global/button/Button";
import Modal from "../global/modal/Modal";

const EditableTable = ({ titleList, rows, deleteCallback, addCallback }) => {
  const [modalActive, setModalActive] = useState(false);
  const [searchString, setSearchString] = useState("");
  const [tableRows, setTableRows] = useState(rows);

  useEffect(() => {
    if (searchString.length === 0) {
      setTableRows(rows);
    } else {
      const searchForNameEntityList = rows.filter((el) => {
        return el.name.toLowerCase().indexOf(searchString) > -1;
      });
      setTableRows(searchForNameEntityList);
    }
  }, [rows, searchString]);

  return (
    <>
      <div className="editable-table">
        <div className="editable-table__wrapper">
          <div className="editable-table__input-wrapper">
            <InputSearch
              callback={(value) => {
                setSearchString(value);
              }}
            />
          </div>
          <Button onClick={() => setModalActive(true)}>Добавить</Button>
        </div>
        <Table
          titleList={titleList}
          rows={tableRows}
          deleteCallback={deleteCallback}
        />
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <PhoneEntryForm
          submit={addCallback}
          data={rows}
          afterSubmit={setModalActive}
        />
      </Modal>
    </>
  );
};

EditableTable.propTypes = {
  titleList: PropTypes.arrayOf(PropTypes.string).isRequired,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteCallback: PropTypes.func.isRequired,
  addCallback: PropTypes.func.isRequired,
};

export default EditableTable;
