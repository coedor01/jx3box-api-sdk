import { getSkills } from "../api"

describe("Skill Api", () => {
  test("Get Skills", async () => {
    expect(
      await getSkills("2716")
        .then(value => value.status)
    ).toBe(200);
  });
});