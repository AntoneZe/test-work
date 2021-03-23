import React from "react";

import PhoneEntryForm, { useSubmit } from "./PhoneEntryForm";

const data = [{ id: 1, name: "Test name", phone: "+79122142899" }];

function HookWrapper(props) {
  const hook = props.hook ? props.hook() : undefined;
  return <div hook={hook} />;
}

describe("PhoneEntryForm component", () => {
  it("should render PhoneEntryForm component", () => {
    const component = shallow(
      <PhoneEntryForm submit={() => {}} afterSubmit={() => {}} data={data} />
    );
    expect(component).toMatchSnapshot();
  });
});

describe("useFormField", () => {
  it("should render", () => {
    let wrapper = shallow(<HookWrapper />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it("should be valid", () => {
    const callback = jest.fn();

    let wrapper = shallow(<HookWrapper hook={() => useSubmit(callback)} />);

    let { hook } = wrapper.find("div").props();
    let [submitHandler, nameError, phoneError] = hook;
    expect(nameError).toEqual("");
    expect(phoneError).toEqual("");

    submitHandler(
      "AntonZinckenko",
      "+79122142899",
      [data],
      [() => {}, () => {}],
      () => {}
    );
    expect(callback.mock.calls.length).toEqual(1);
  });

  it("should't be valid", () => {
    const callback = jest.fn();

    let wrapper = shallow(<HookWrapper hook={() => useSubmit(callback)} />);

    let { hook } = wrapper.find("div").props();
    let [submitHandler, nameError, phoneError] = hook;
    expect(nameError).toEqual("");
    expect(phoneError).toEqual("");

    submitHandler("", "wqe", [data], [() => {}, () => {}], () => {});
    expect(callback.mock.calls.length).toEqual(0);
  });
});
