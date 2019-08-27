
import objectFrom from "./";

test("works", () => {
  expect(
    objectFrom(["key", "subkey"])("value")
  ).toEqual(
    {key: {subkey: "value"}}
  );
});
