import React from "react";

import Button from "../button/Button";

import "./table.less";

const Table = () => {
  return (
    <div className="custom-table__wrapper">
      <table className="custom-table">
        <thead>
          <tr>
            <th>id</th>
            <th>Имя</th>
            <th>Номер телефона</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Leanne Graham</td>
            <td>1-770-736-8031</td>
            <td>
              <Button onClick={() => {}}>
                <img src="public/img/delete.svg" alt="delete" />
              </Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Ervin Howell</td>
            <td>010-692-6593</td>
            <td>
              <Button onClick={() => {}}>
                <img src="public/img/delete.svg" alt="delete" />
              </Button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Clementine Bauch</td>
            <td>1-463-123-4447</td>
            <td>
              <Button onClick={() => {}}>
                <img src="public/img/delete.svg" alt="delete" />
              </Button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Patricia Lebsack</td>
            <td>493-170-9623</td>
            <td>
              <Button onClick={() => {}}>
                <img src="public/img/delete.svg" alt="delete" />
              </Button>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Chelsey Dietrich</td>
            <td>(254)954-1289</td>
            <td>
              <Button onClick={() => {}}>
                <img src="public/img/delete.svg" alt="delete" />
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
