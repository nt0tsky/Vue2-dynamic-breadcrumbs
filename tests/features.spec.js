import { wrapperBuilder, pathBuilder, pwd, breadcrumbsBuilder } from "./index";

describe("Condition render", () => {
  it("Condition root", () => {
    const { wrapper } = wrapperBuilder("conditionName");

    expect(pwd(wrapper)).toBe("/condition/");
    expect(pathBuilder(wrapper)).toBe("indexName->conditionName");
  });

  it("Condition level 1", () => {
    const { wrapper } = wrapperBuilder("conditionStep1");

    expect(pwd(wrapper)).toBe("/condition/step1/");
    expect(breadcrumbsBuilder(wrapper)).toBe(
      "Index->Condition->Condition 1"
    );
  });

  it("Condition level 2 without level 1", () => {
    const { wrapper } = wrapperBuilder("conditionStep1Level1");

    expect(pwd(wrapper)).toBe("/condition/step1/level1");
    expect(breadcrumbsBuilder(wrapper)).toBe(
      "Index->Condition->Condition 1 level 1"
    );
  })
});
