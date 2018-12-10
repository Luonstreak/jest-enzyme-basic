import React from "react";
import { mount } from "enzyme";

import CommentBox from "components/CommentBox";
import Root from "root";

let component;

beforeEach(() => {
  component = mount(<Root>
      <CommentBox />
    </Root>);
});

it("has a textarea and two button", () => {
  expect(component.find("textarea").length).toEqual(1);
  expect(component.find("button").length).toEqual(2);
});

describe("the textarea", () => {
  beforeEach(() => {
    component
      .find("textarea")
      .simulate("change", { target: { value: "test-comment" } });
    component.update();
  });
  it("has a functional input", () => {
    expect(component.find("textarea").prop("value")).toEqual("test-comment");
  });

  it("empties out textarea on submit", () => {
    expect(component.find("textarea").prop("value")).toEqual("test-comment");
    component.find("form").simulate("submit", { preventDefault: () => {} });
    component.update();
    expect(component.find("textarea").prop("value")).toEqual("");
  });
});

afterEach(() => {
  component.unmount();
});