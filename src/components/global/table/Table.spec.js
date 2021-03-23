import React from "react";

import TestTable from "./TestTable";
import Table from "./Table";

describe("Table component", () => {
  it("should render Table component", () => {
    const component = render(<TestTable />);
    expect(component).toMatchSnapshot();
  });
});

describe("Table component with deleteCallback", () => {
  it("should call callback once", () => {
    const mockCallBack = jest.fn();

    const event = {
      preventDefault() {},
      target: {
        id: "test-id",
      },
    };

    const component = mount(<TestTable deleteCallback={mockCallBack} />);
    const btn = component.find("button").first();
    btn.simulate("click", event);
    expect(mockCallBack.mock.calls.length).toEqual(0);
  });
});

describe("Table with empty row list", () => {
  it("should render with tbody 'no-data' message", () => {
    const component = mount(
      <Table rows={[]} titleList={["test-1", "test-2", "test-3"]} />
    );
    expect(component).toMatchSnapshot();
  });
});
