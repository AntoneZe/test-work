import React from "react";

import EditableTable from "./EditableTable";

describe("EditableTable component", () => {
  it("should render EditableTable component", () => {
    const component = render(
      <EditableTable
        titleList={["id", "name", "phone"]}
        rows={[{ id: 1, phone: "+79122142899", name: "Anton Zinchenko" }]}
        deleteCallback={() => {}}
        addCallback={() => {}}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
