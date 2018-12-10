import { addComment, deleteComment } from "actions";
import { ADD_COMMENT, DELETE_COMMENT } from "actions/types";

describe("addComment creates a comment", () => {
  const action = addComment("test-action-creator");
  it("addComment return ADD_COMMENT action", () => {
    expect(action).toHaveProperty("type", ADD_COMMENT);
  });
  it("addComment return the right paylaod", () => {
    expect(action).toHaveProperty("payload", "test-action-creator");
  });
});

describe("deleteComment deletes a comment", () => {
  const action = deleteComment("test-action-creator");
  it("deleteComment returns the right action type", () => {
    expect(action).toHaveProperty("type", DELETE_COMMENT);
  });
  it("deleteComment returns the right payload", () => {
    expect(action).toHaveProperty("payload", "test-action-creator");
  });
});
