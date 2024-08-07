import { getXFsMap } from "..";

describe("XF Service", () => {
  test("Get XFs map", () => {
    expect(
      getXFsMap([10081])
    );
  });
});