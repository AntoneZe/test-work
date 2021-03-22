import React from "react";

import Button from "../global/button/Button";
import Input from "../global/input/Input";

import "./phone-entry-form.less";

const PhoneEntryForm = () => {
  return (
    <form>
      <fieldset className="custom-fieldset">
        <legend>Добавить запись</legend>
        <div className="custom-fieldset__wrapper">
          <label htmlFor="name">Имя</label>
          <Input type={"text"} id={"name"} />
        </div>
        <div className="custom-fieldset__wrapper">
          <label htmlFor="phone">Номер телефона</label>
          <Input type={"text"} id={"phone"} />
        </div>
        <div className="custom-fieldset__wrapper custom-fieldset__wrapper--button">
          <Button />
        </div>
      </fieldset>
    </form>
  );
};

export default PhoneEntryForm;
