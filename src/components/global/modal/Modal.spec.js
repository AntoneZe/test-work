import React from "react";

import Modal from "./Modal";

describe("render Modal component", () => {
  it("should render Modal component", () => {
    const component = render(<Modal active={true} setActive={() => {}} />);
    expect(component).toMatchSnapshot();
  });
});

describe("handle setActive callback", () => {
  it("should handle setActive callback", () => {
    const setActive = jest.fn();
    const handleClick = jest.spyOn(React, "useState");
    handleClick.mockImplementation((active) => [active, setActive]);

    const component = mount(<Modal active={true} setActive={setActive} />);
    component.find(".custom-modal").simulate("click");
    expect(setActive.mock.calls.length).toEqual(1);
  });

  it("should close modal", () => {
    const setActive = jest.fn();
    const handleClick = jest.spyOn(React, "useState");
    handleClick.mockImplementation((active) => [active, setActive]);

    const component = mount(<Modal active={true} setActive={setActive} />);
    component.find("button").simulate("click");
    expect(setActive).toBeCalledWith(false);
  });
});

describe("check modal className", () => {
  it("should have 'active' class", () => {
    const component = mount(<Modal active={true} setActive={() => {}} />);
    const modal = component.find(".custom-modal");
    expect(modal.hasClass("active")).toBe(true);
  });
  it("should't have 'active' class", () => {
    const component = mount(<Modal active={false} setActive={() => {}} />);
    const modal = component.find(".custom-modal");
    expect(modal.hasClass("active")).toBe(false);
  });
});
