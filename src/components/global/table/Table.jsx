import React from 'react';
import PropTypes from 'prop-types';

import Button from '../button/Button';

import './table.less';

const Table = ({ titleList, rows, deleteCallback }) => {
  const titleListEl = titleList.map((title) => (
    <th key={title.toString()}>{title}</th>
  ));
  const rowsList = rows.map((el) => {
    return (
      <tr key={el.phone}>
        <td>{el.id}</td>
        <td>{el.name}</td>
        <td>{el.phone}</td>
        <td>
          <Button onClick={() => deleteCallback(el.id)}>
            <img
              width='15'
              height='15'
              src='public/img/delete.svg'
              alt='delete'
            />
          </Button>
        </td>
      </tr>
    );
  });

  let tbody;

  if (rows && rows.length > 0) {
    tbody = <tbody>{rowsList}</tbody>;
  } else {
    tbody = (
      <tbody className='custom-table__dummy'>
        <tr>
          <td colSpan={1} align='center'></td>
          <td colSpan={4} align='center'>
            Нет записей...
          </td>
          <td colSpan={1} align='center'></td>
          <td colSpan={1} align='center'></td>
        </tr>
      </tbody>
    );
  }

  return (
    <div className='custom-table__wrapper'>
      <table className='custom-table'>
        <thead>
          <tr>
            {titleListEl}
            <th></th>
          </tr>
        </thead>
        {tbody}
      </table>
    </div>
  );
};

Table.propTypes = {
  titleList: PropTypes.arrayOf(PropTypes.string).isRequired,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
