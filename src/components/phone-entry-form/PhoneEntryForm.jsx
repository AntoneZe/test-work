import React, { useState } from "react";
import PropTypes from "prop-types";

import Button from "../global/button/Button";
import Input from "../global/input/Input";

import "./phone-entry-form.less";

const MAX_PHONE_LENGTH = 18;
const MAX_NAME_LENGTH = 100;

export const useSubmit = (callback) => {
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  // const NAME_REG_EXP = /^([А-ЯA-Z]|[А-ЯA-Z][\x27а-яa-z]{1,}|[А-ЯA-Z][\x27а-яa-z]{1,}\-([А-ЯA-Z][\x27а-яa-z]{1,}|(оглы)|(кызы)))\040[А-ЯA-Z][\x27а-яa-z]{1,}(\040[А-ЯA-Z][\x27а-яa-z]{1,})?$/;
  const NAME_REG_EXP = /^[a-zA-Zа-яёА-ЯЁ\s\-]+$/;
  const PHONE_REG_EXP = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

  const validateField = (
    type,
    value,
    data,
    regExp,
    errorCallback,
    errorMessage
  ) => {
    const setError = (message) => {
      errorCallback(message);
      return message;
    };
    const resetError = () => {
      const emptyError = "";
      errorCallback("");
      return emptyError;
    };

    if (value && value.length > 0) {
      if (regExp.test(value.trim())) {
        if (data.length && value.length > 0) {
          const eqCheck = data.filter((el) => el[type] === value.trim());
          return eqCheck.length ? setError(errorMessage[0]) : resetError();
        }
        return resetError();
      } else {
        return setError(errorMessage[1]);
      }
    } else {
      return setError(errorMessage[2]);
    }
  };

  const validateHandler = (name, phone, data) => {
    return [
      validateField("name", name, data, NAME_REG_EXP, setNameError, [
        "Запись с указанными именем уже внесена в список",
        "Введите корректное имя",
        "Поле 'Имя' обязательно к заполнению",
      ]),
      validateField("phone", phone, data, PHONE_REG_EXP, setPhoneError, [
        "Указанный номер телефона уже внесен в список",
        "Введите корректный номер телефона",
        "Поле 'Номер телефона' обязательно к заполнению",
      ]),
    ];
  };

  const submitHandler = (
    name,
    phone,
    data,
    resetFieldsCallback,
    modalState
  ) => {
    const errorList = validateHandler(name, phone, data).reduce(
      (acc, el) => (el.length ? [...acc, el] : acc),
      []
    );
    if (errorList.length > 0) {
      return;
    }
    callback(name, phone);
    resetFieldsCallback[0]("");
    resetFieldsCallback[1]("");
    modalState(false);
  };

  return [submitHandler, nameError, phoneError];
};

const PhoneEntryForm = ({ submit, data, afterSubmit }) => {
  const [submitHandler, nameError, phoneError] = useSubmit(submit);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submitHandler(name, phone, data, [setName, setPhone], afterSubmit);
      }}
    >
      <fieldset className="custom-fieldset">
        <legend>Добавить запись</legend>
        <div className="custom-fieldset__wrapper">
          <label htmlFor="name">Имя</label>
          <Input
            value={name}
            handler={setName}
            type={"text"}
            id={"name"}
            lengthRule={MAX_NAME_LENGTH}
            errorMessage={!!nameError ? nameError : null}
          />
        </div>
        <div className="custom-fieldset__wrapper">
          <label htmlFor="phone">Номер телефона</label>
          <Input
            value={phone}
            handler={setPhone}
            type={"text"}
            id={"phone"}
            lengthRule={MAX_PHONE_LENGTH}
            errorMessage={!!phoneError ? phoneError : null}
          />
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
  afterSubmit: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PhoneEntryForm;
