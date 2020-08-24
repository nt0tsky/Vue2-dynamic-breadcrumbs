# Vue2 Dynamic Breadcrumbs

Installation

`npm install --save @nst0tsky-dev/vue2-dynamic-breadcrumbs`

## Support 
- Dynamic template
- parent support
- short label
- Route context
---

## Usage

Use the meta.breadcrumb: property of a route or child route, e.g.:
breadcrumb property can be:

- as a string for render as plain text
- vue template for custom markup

Also, breadcrumb has dynamic parent support, that will search by route name and insert before breadcrumb iterator. For example, we have a case when we cant insert route as a child of one => we can directly set a parent of the route for correct render of a breadcrumbs hierarchy.

    ...
    meta: {
      breadcrumb: "Account dashboard"
    }


    {
        path: "/:accountId",
        component: AccountDetails,
        children: [
          {
            name: "accountHome",
            path: "",
            component: AccountDashboard,
            meta: {
              breadcrumb: {
                template: () => import("@/components/dh-breadcrumbs/accountTemplate"),
                parent: "accounts"
              }
            }
          }
        ]
      },
      {
        path: "/:isBuy?",
        name: "accounts",
        component: Accounts,
        meta: {
          breadcrumb: {
            template: () => import("@/components/dh-breadcrumbs/accountListTemplate")
          }
        }
      }

### Get breadcrumbs

After import plugin, we will have access to breadcrumbs structure with render hierarchy via property $breadcrumb


      computed: {
        breadcrumbs() {
          const { $breadcrumbs } = this;
    
          return $breadcrumbs;
        },
      },


### Breadcrumb context

Every breadcrumb has a unique context(which you can use in render template) relative to his root-view-page (not absolute root) e.g:

- we entered to route by path `/:accountId/audience/:profileId/campaigns` and has 4 route matches like:
    - /:accountId
    - /:accountId/audience
    - /:accountId/audience/:profileId
    - /:accountId/audience/:profileId/campaigns
    So context key will be `/:accountId/audience`

We can bind context on every vue component via call method bindContext of instance  $breadcrumbManager (that will be bind in page-context and will be available in all hierarchy of breadcrumbs hierarchy) eg:


      watch: {
        contactProfile: {
          immediate: true,
          handler(newState) {
            if (!newState) return;
    
            this.$breadcrumbsManager.bindContext("fullName", newState.profile.fullName);
          },
        }
      },

and using it after previous step inside breadcrumb template as:

    <template>
      <div class="dh-breadcrumbs__item dh-breadcrumbs-account-list">
        <router-link
          :to="{ name: breadcrumb.name, params: breadcrumb.params, query: breadcrumb.query }"
        >{{ subscriberName }}</router-link>
      </div>
    </template>
    <script>
    export default {
      props: ["breadcrumb"],
      computed: {
        subscriberName() {
          const { context } = this.breadcrumb;
    
          return context.fullName;
        }
      }
    };
    </script>
