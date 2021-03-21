import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';

import { addPhone } from '../reducers/phoneReducers.js';

import EditableTable from './editable-table/EditableTable';

const App = () => {
  const dispatch = useDispatch();
  const phone = useSelector((state) => state.phone.phone);

  const onTestButtonClick = () => {
    dispatch(addPhone('8-800-555-3535'));
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <h1>Телефонный справочник</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          <EditableTable />
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
