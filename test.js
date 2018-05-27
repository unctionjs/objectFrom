/* eslint-disable flowtype/require-return-type */
import objectFrom from "./index"

test("works", () => {
  expect(
    objectFrom(["key", "subkey"])("value")
  ).toEqual(
    {key: {subkey: "value"}}
  )
})
