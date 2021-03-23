import React from "react";
import Button from "./Button";

const setUp = (props) => shallow(<Button {...props} />);

describe("should render Button component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render Button component", () => {
    expect(component).toMatchSnapshot();
  });

  it("should contain .custom-button class", () => {
    const button = component.find(".custom-button");
    expect(button.length).toBe(1);
  });
});

describe("component callback", () => {
  let component;
  let instance;
  beforeEach(() => {
    component = setUp();
    instance = component.instance();
  });

  it("should handle Button with props", () => {
    const mockCallBack = jest.fn();

    const component = setUp({
      onClick: mockCallBack,
    });
    const btn = component.find("button");
    btn.simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  it("should handle Button without props", () => {
    const mockCallBack = jest.fn();

    const component = setUp({
      onClick: undefined,
    });
    const btn = component.find("button");
    btn.simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(0);
  });
});
