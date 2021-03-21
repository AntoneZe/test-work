import React from 'react';

import './editable-table.less';

import Table from '../global/table/Table';
import InputSearch from '../global/input-search/InputSearch';
import Button from '../global/button/Button';

const EditableTable = () => {
  return (
    <div className='editable-table'>
      <div className='editable-table__wrapper'>
        <div className='editable-table__input-wrapper'>
          <InputSearch />
        </div>
        <Button>Добавить</Button>
      </div>
      <Table />
    </div>
  );
};

export default EditableTable;
