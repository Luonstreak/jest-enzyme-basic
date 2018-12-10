import commentsReducer from "reducers/comments_reducer";
import { ADD_COMMENT } from "actions/types";

it("handles actions of type ADD_COMMENT", () => {
  const action = { type: ADD_COMMENT, payload: "comment-reducer-test" };
  const newState = commentsReducer([], action);
  expect(newState).toEqual(["comment-reducer-test"]);
});

it("handles action with unknown type", () => {
  const newState = commentsReducer([], {type: 'aspfksl'});
  expect(newState).toEqual([]);
});
