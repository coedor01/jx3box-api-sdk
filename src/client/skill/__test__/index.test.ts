import { getSkillsMap, getTalentsMap } from "..";

describe("Skill Service", () => {
  test("Get Skills map", async () => {
    expect(
      await getSkillsMap([2716])
    );
  });
  test("Get Talents map", async () => {
    expect(
      await getTalentsMap([2716])
    );
  });
});