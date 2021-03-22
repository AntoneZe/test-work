import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Button from "../global/button/Button";
import Input from "../global/input/Input";

import "./phone-entry-form.less";

const useSubmit = () => {
  const submitHandler = (name, phone) => {
    console.log("name", name);
    console.log("phone", phone);
    console.log("submit");
  };
  return [submitHandler];
};

const PhoneEntryForm = ({ submit }) => {
  const [submitHandler] = useSubmit();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submitHandler(name, phone);
      }}
    >
      <fieldset className="custom-fieldset">
        <legend>Добавить запись</legend>
        <div className="custom-fieldset__wrapper">
          <label htmlFor="name">Имя</label>
          <Input handler={setName} type={"text"} id={"name"} />
        </div>
        <div className="custom-fieldset__wrapper">
          <label htmlFor="phone">Номер телефона</label>
          <Input handler={setPhone} type={"text"} id={"phone"} />
        </div>
        <div className="custom-fieldset__wrapper custom-fieldset__wrapper--button">
          <Button type={"submit"}>Добавить</Button>
        </div>
      </fieldset>
    </form>
  );
};

PhoneEntryForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default PhoneEntryForm;
