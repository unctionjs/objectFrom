
import objectFrom from "./index.ts";

test("works", () => {
  expect(
    objectFrom(["key", "subkey"])("value")
  ).toEqual(
    {key: {subkey: "value"}}
  );
});
