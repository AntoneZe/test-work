import React from "react";

import InputSearch from "./InputSearch";

describe("InputSearch component", () => {
  it("should render InputSearch component", () => {
    const component = render(<InputSearch callback={() => {}} />);
    expect(component).toMatchSnapshot();
  });
});

describe("InputSearch search", () => {
  it("should reset search", () => {
    const setValue = jest.fn();
    const event = {
      preventDefault() {},
      target: {
        value: "",
      },
    };

    const component = mount(<InputSearch callback={setValue} />);

    component.find("input").simulate("change", event);
    expect(setValue.mock.calls.length).toEqual(1);
  });

  it("should do search", () => {
    const setValue = jest.fn();
    const handleClick = jest.spyOn(React, "useState");
    handleClick.mockImplementation((value) => [value, setValue]);

    const event = {
      preventDefault() {},
      target: {
        value: "test",
      },
    };

    const component = mount(<InputSearch callback={() => {}} />);

    component.find("input").simulate("change", event);
    expect(component.find("input").prop("value")).toEqual("test");
  });
});

describe("InputSearch search button", () => {
  it("InputSearch search button do once", () => {
    const callback = jest.fn();
    const component = mount(<InputSearch callback={callback} />);

    const event = {
      preventDefault() {},
      target: {
        value: "",
      },
    };

    component.find("button").simulate("click", event);
    expect(callback.mock.calls.length).toEqual(1);
  });
});
