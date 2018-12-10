import React from "react";
import { mount } from "enzyme";

import CommentList from "components/CommentList";
import Root from "root";

let component;
beforeEach(() => {
  const initalState = { comments: ["comment1", "comment2"] };
  component = mount(
    <Root initialState={initalState}>
      <CommentList />
    </Root>
  );
});

it("creates one LI element per comment", () => {
  expect(component.find("li").length).toEqual(2);
});

it("renders the comment text", () => {
  expect(component.render().text()).toContain('comment1');
  expect(component.render().text()).toContain('comment2');
});
