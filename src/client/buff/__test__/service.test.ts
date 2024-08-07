import { getBuffsMap } from "..";

describe("Buff Service", () => {
  test("Get buffs map", async () => {
    expect(
      await getBuffsMap([112])
    );
  });
});