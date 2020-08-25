import Component from "../components/Component.vue";
import RouterView from "../components/RouterView.vue";
import Account from "../components/Account.vue";
import AccountDetails from "../components/AccountDetails";
import Settings from "../components/Settings";
import SettingsProfile from "../components/SettingsProfile";
import SettingsPlatform from "../components/SettingsPlatform";

export default [
  {
    path: "/",
    component: RouterView,
    children: [
      {
        path: "",
        name: "indexName",
        component: Component,
        meta: {
          breadcrumb: "Index",
        },
      },
      {
        path: "condition",
        component: RouterView,
        children: [
          {
            path: "",
            name: "conditionName",
            component: Component,
            meta: {
              breadcrumb: {
                label: "Condition",
                parent: "indexName",
              },
            },
          },
          {
            path: "step1",
            component: RouterView,
            children: [
              {
                path: "",
                name: "conditionStep1",
                component: Component,
                meta: {
                  breadcrumb: {
                    label: "Condition 1",
                    condition: ({ route }) => route.name === "conditionStep1",
                  },
                },
              },
              {
                path: "level1",
                name: "conditionStep1Level1",
                component: Component,
                meta: {
                  breadcrumb: "Condition 1 level 1",
                },
              },
            ],
          },
        ],
      },
      {
        path: "account",
        component: RouterView,
        children: [
          {
            path: "",
            name: "accountName",
            component: Account,
            meta: {
              breadcrumb: {
                label: "Account",
                parent: "indexName",
              },
            },
          },
          {
            path: "details",
            name: "accountDetails",
            component: AccountDetails,
            meta: {
              breadcrumb: "Details",
            },
          },
        ],
      },
      {
        path: "settings",
        component: RouterView,
        children: [
          {
            path: "",
            name: "settingsName",
            component: Settings,
            meta: {
              breadcrumb: {
                label: "Settings",
                parent: "indexName",
              },
            },
          },
          {
            path: "profile",
            name: "profileName",
            component: SettingsProfile,
            meta: {
              breadcrumb: {
                label: "Profile",
              },
            },
          },
          {
            path: "platform",
            name: "platformName",
            component: SettingsPlatform,
            meta: {
              breadcrumb: {
                label: "Platform",
              },
            },
          },
          {
            path: "global",
            name: "globalName",
            component: Component,
            meta: {
              breadcrumb: {
                label: "Global",
              },
            },
          },
        ],
      },
    ],
  },
];
