import { getBuffs } from "../api"

describe("Buff Api", () => {
  test("Get buffs", async () => {
    expect(
      await getBuffs("112")
        .then(value => value.status)
    ).toBe(200);
  });
});