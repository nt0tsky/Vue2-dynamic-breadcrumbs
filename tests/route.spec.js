import { wrapperBuilder, pathBuilder, pwd } from "./index";

describe("Route breadcrumbs", () => {
  it("index", () => {
    const { wrapper } = wrapperBuilder("indexName");

    expect(pathBuilder(wrapper)).toBe("indexName");
  });

  it("index -> settings", () => {
    const { wrapper } = wrapperBuilder("settingsName");

    expect(pwd(wrapper)).toBe("/settings/");
    expect(pathBuilder(wrapper)).toBe("indexName->settingsName");
  });

  it("index -> settings -> nested level 1", () => {
    const { router, wrapper } = wrapperBuilder();

    ["profileName", "platformName", "globalName"].forEach((route) => {
      router.push({ name: route });

      expect(pathBuilder(wrapper)).toBe(`indexName->settingsName->${route}`);
      expect(pwd(wrapper)).toBe(
        `/settings/${(0, route.slice(0, route.length - 4))}`
      );
    });
  });

  it("index -> account -> accountDetails", () => {
    const { wrapper } = wrapperBuilder("accountDetails");

    expect(pathBuilder(wrapper)).toBe("indexName->accountName->accountDetails");
    expect(pwd(wrapper)).toBe("/account/details");
  });
});
