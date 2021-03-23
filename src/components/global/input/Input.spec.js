import React from "react";

import Input from "./Input";

const type = "text";
const id = "test-1";
const handler = () => "done";
const errorMessage = "test message";

describe("should render Input component", () => {
  it("should contain .custom-input__wrapper class", () => {
    let setUp = (props) => shallow(<Input {...props} />);
    const component = setUp({ type, id, handler });

    const input = component.find(".custom-input__wrapper");
    expect(input.length).toBe(1);
  });

  it("should contain error message", () => {
    let setUp = (props) => shallow(<Input {...props} />);
    const component = setUp({ type, id, handler, errorMessage });
    const input = component.find("span");
    expect(input.length).toBe(1);
  });
});

describe("Input component", () => {
  it("should render Input component with props", () => {
    const component = shallow(
      <Input
        type={"text"}
        id={"test-2"}
        handler={() => {
          return "done";
        }}
      />
    );
    expect(component).toMatchSnapshot();
  });
});

describe("component callback", () => {
  it("should handle Button with props", () => {
    const mockCallBack = jest.fn();
    const event = {
      preventDefault() {},
      target: {
        value: "test",
      },
    };

    const component = shallow(
      <Input id={id} type={type} handler={mockCallBack} />
    );
    component.find("input").simulate("change", event);
    expect(mockCallBack).toBeCalledWith("test");
  });
});
