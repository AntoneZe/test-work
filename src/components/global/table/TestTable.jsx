import React from "react";

import Table from "./Table";

const titleList = ["id", "name", "phone"];
const rows = [
  { id: 1, name: "test-1", phone: "11" },
  { id: 2, name: "test-2", phone: "22" },
  { id: 3, name: "test-3", phone: "33" },
];
const deleteCallback = () => {
  return "done";
};

const TestTable = () => {
  return (
    <Table titleList={titleList} rows={rows} deleteCallback={deleteCallback} />
  );
};

export default TestTable;
