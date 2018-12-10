import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";

import Root from "root";
import App from "components/App";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "comment1" }, { name: "comment2" }]
  });
});

it("can fetch a list of comments and display them", done => {
  // attempt to render the ap
  const component = mount(
    <Root>
      <App />
    </Root>
  );
  // click api call button
  component.find(".api").simulate("click");
  // find a list of comments
  moxios.wait(() => {
    component.update();
    expect(component.find("li").length).toEqual(2);
    done();
    component.unmount();
  });
});

afterEach(() => {
  moxios.uninstall();
});
