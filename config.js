const DocumentationReference = [
  {
    path: "doc/index.mdx",
    title: "Introduction",
  },
  {
    path: "doc/how-it-works.mdx",
    title: "How Dgraph GraphQL Works",
  },
  {
    path: "doc/app-architectures.mdx",
    title: "App Architecture with Dgraph",
  },  {
    path: "doc/schema/index.mdx",
    title: "Schema",
    children: [
      {
        path: "doc/schema/types.mdx",
        title: "Types",
        showSideBar: true,
        subOptions: [
          { name: "Scalars" },
          { name: "Enums" },
          { name: "Types" },
          { name: "Interfaces" },
          {
            name: "Directives",
            children: [{ name: "Inverse" }, { name: "Search" }],
          },
        ],
      },
      {
        path: "doc/schema/ids.mdx",
        title: "IDs",
      },
      {
        path: "doc/schema/links.mdx",
        title: "Linking Objects",
      },
      {
        path: "doc/schema/search.mdx",
        title: "Search and Filtering",
      },
      {
        path: "doc/schema/deprecated.mdx",
        title: "Deprecation",
      },
      {
        path: "doc/schema/documentation.mdx",
        title: "Documentation and Comments",
      },
      {
        path: "doc/schema/dgraph-schema.mdx",
        title: "Dgraph Schema Fragment",
      },
    ],
  },
  {
    path: "doc/api/index.mdx",
    title: "The API",
    children: [
      {
        path: "doc/api/requests.mdx",
        title: "Requests and Responses",
      },
      {
        path: "doc/api/variables.mdx",
        title: "GraphQL Variables",
      },
      {
        path: "doc/api/fragments.mdx",
        title: "GraphQL Fragments",
      },
      {
        path: "doc/api/multiples.mdx",
        title: "Multiple GraphQL Operations in a Request",
      },
      {
        path: "doc/api/errors.mdx",
        title: "GraphQL Errors",
      },
    ],
  },
  {
    path: "doc/queries/index.mdx",
    title: "Queries",
    children: [
      {
        path: "doc/queries/search.mdx",
        title: "Search and Filtering",
      },
      {
        path: "doc/queries/and-or-not.mdx",
        title: "And Or, and Not",
      },
      {
        path: "doc/queries/search.mdx",
        title: "Order and Pagination",
      },
      {
        path: "doc/queries/skip-include.mdx",
        title: "Skip and Include",
      },
    ],
  },
  {
    path: "doc/mutations/index.mdx",
    title: "Mutations",
    children: [
      {
        path: "doc/mutations/add.mdx",
        title: "Add",
      },
      {
        path: "doc/mutations/update.mdx",
        title: "Update",
      },
      {
        path: "doc/mutations/delete.mdx",
        title: "Delete",
      },
      {
        path: "doc/mutations/deep.mdx",
        title: "Deep mutations",
      },
    ],
  },
  {
    path: "doc/subscriptions/index.mdx",
    title: "Subscriptions",
    children: [ ],
  },
  {
    path: "doc/authorization/index.mdx",
    title: "Authorization",
    children: [
      {
        path: "doc/authorization/directive.mdx",
        title: "The `@auth` directive",
      },
      {
        path: "doc/authorization/mutations.mdx",
        title: "Mutations",
      },
    ],
  },
  {
    path: "doc/custom/index.mdx",
    title: "Custom Resolvers",
    children: [
      {
        path: "doc/custom/directive.mdx",
        title: "The `@custom` directive",
      },
      {
        path: "doc/custom/query.mdx",
        title: "Custom Queries",
      },
      {
        path: "doc/custom/mutation.mdx",
        title: "Custom Mutations",
      },
      {
        path: "doc/custom/field.mdx",
        title: "Custom Fields",
      },
    ],
  },
  {
    path: "doc/directives.mdx",
    title: "Index of Directives",
  },
  {
    path: "doc/admin.mdx",
    title: "Admin",
  },
  {
    path: "doc/dgraph.mdx",
    title: "GraphQL on Existing Dgraph",
  },
]

const Graphql = [
  {
    title: "Introduction",
    path: "dgraph-graphql/index.mdx",
    showSideBar:true,
    subOptions: [
      { name: "Welcome to GraphQL", scrollTo:'Welcome_to_GraphQL' },
      { name: "GraphQL Quick Start" ,scrollTo:'GraphQL_Quick_Start'},
    ]
  },
  {
    title: "GraphQL Quick Start",
    path: "dgraph-graphql/quick-start.mdx",
    showSideBar: false
  },
]
const tutorial = [
  {
    title: "Introduction",
    path: "tutorials/index.mdx",
    showSideBar: true
  },
  {
    path: "tutorials/todo-app-tutorial/index.mdx",
    title: "Todo App Tutorial",
    children: [
      {
        path: "tutorials/todo-app-tutorial/todo-schema-design.mdx",
        title: "Schema Design",
        showSideBar: true,
        subOptions: [
          { name: "Running" },
          { name: "Mutating" },
          { name: "Querying" },
          { name: "Querying with Filters" }
        ]
      },
      {
        path: "tutorials/todo-app-tutorial/todo-UI.mdx",
        title: "Basic UI",
        showSideBar: true,
        subOptions: [
          { name: "Create React app" },
          { name: "Install dependencies" },
          { name: "Setup Apollo Client" },
          { name: "Queries and Mutations" },
          { name: "Auth0 integration" }
        ]
      },
      {
        path: "tutorials/todo-app-tutorial/todo-auth-rules.mdx",
        title: "Auth Rules"
      },
      {
        path: "tutorials/todo-app-tutorial/todo-auth0-jwt.mdx",
        title: "Using Auth0's JWT"
      },
      {
        path: "tutorials/todo-app-tutorial/deploy.mdx",
        title: "Deploy on Slash GraphQL"
      }
    ]
  },
]

const toolsAndDeployment = [
    {
    title: "Tools and Deployments",
    path: "recipes/index.mdx",
    showSideBar: true
  }
]

const slashGraphQL = [
  {
    path: "slash-graphql/index.mdx",
    title: "Introduction"
  },
  {
    path: "slash-graphql/slash-quick-start.mdx",
    title: "Slash Quick Start (draft)"
  },
]

const exampleApps = [
  {
    title: "Example Apps",
    path: "example-apps/index.mdx",
    showSideBar: true
  }
]

const versions = ["master", "v20.03.1"]
const currentVersion = "master"
const URL = "https://graphql.dgraph.io/"

module.exports.sidebarOptions = [
  slashGraphQL,
  DocumentationReference,
  exampleApps,
  Graphql,
  tutorial,
  toolsAndDeployment
]
module.exports.versions = versions
module.exports.currentVersion = currentVersion
module.exports.URL = URL
