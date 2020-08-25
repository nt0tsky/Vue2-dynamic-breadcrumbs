import { wrapperBuilder, pathBuilder, pwd } from "./index";

describe("Data route breadcrumbs", () => {
  it("Index data", () => {
    const { wrapper } = wrapperBuilder("indexName");

    expect(wrapper.find("div").text()).toBe("Component");
  });

  it("Account data", () => {
    const { wrapper } = wrapperBuilder("accountName");

    expect(wrapper.find("div").text()).toBe("Account");
  });

  it("Account details data", () => {
    const { wrapper } = wrapperBuilder("accountDetails");

    expect(wrapper.find("div").text()).toBe("Account details");
  });

  it("Settings data", () => {
    const { wrapper } = wrapperBuilder("settingsName");

    expect(wrapper.find("div").text()).toBe("Settings");
  });

  it("Settings profile", () => {
    const { wrapper } = wrapperBuilder("profileName");

    expect(wrapper.find("div").text()).toBe("Settings profile");
  });

  it("Settings platform", () => {
    const { wrapper } = wrapperBuilder("platformName");

    expect(wrapper.find("div").text()).toBe("Settings platform");
  })
});
