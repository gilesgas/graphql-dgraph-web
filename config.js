const sidebarOptions = [
  {
    path: "quick-start.mdx",
    title: "Quick Start",
  },
  {
    path: "api.mdx",
    title: "The API",
  },
  {
    path: "example.mdx",
    title: "Example",
  },
  {
    path: "schema.mdx",
    title: "Schema",
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
    path: "admin.mdx",
    title: "Admin",
  },
  {
    path: "dgraph.mdx",
    title: "GraphQL on Existing Dgraph",
  },
]

const versions = ["master", "v20.03.1"]
const currentVersion = "v20.03.1"
const URL = "https://graphql.dgraph.io/docs/"

module.exports.sidebarOptions = sidebarOptions
module.exports.versions = versions
module.exports.currentVersion = currentVersion
module.exports.URL = URL
