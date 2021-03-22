import React from "react";
import PropTypes from "prop-types";

import Button from "../button/Button";

import "./table.less";

const Table = ({ titleList, rows, deleteCallback }) => {
  const titleListEl = titleList.map((title) => (
    <th key={title.toString()}>{title}</th>
  ));
  const rowsList = rows.map((el) => {
    return (
      <>
        <tr key={el.phone.toString}>
          <td>{el.id}</td>
          <td>{el.name}</td>
          <td>{el.phone}</td>
          <td>
            <Button onClick={deleteCallback}>
              <img src="public/img/delete.svg" alt="delete" />
            </Button>
          </td>
        </tr>
      </>
    );
  });

  return (
    <div className="custom-table__wrapper">
      <table className="custom-table">
        <thead>
          <tr>
            {titleListEl}
            <th></th>
          </tr>
        </thead>
        <tbody>{rowsList}</tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  titleList: PropTypes.arrayOf(PropTypes.string).isRequired,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
