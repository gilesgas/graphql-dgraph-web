### Running

```sh
yarn install
yarn start
```

### Adding a page 

 Just add the title and path in `config.js`. Refer that file for more info.

### Adding GraphiQL component

The common GraphiQL component can be used throughout the site, just include it in the `mdx` file you want and you can even pass a `query` to fill it with a default value. 

### Adding suboptions (right sidebar)

Refer `schema.mdx` and make sure to add the `<a>` tag for each suboption and then look `config` to see how to add the options there.

### Deploy

Build all tags with `pathPrefix` except master like -

```
yarn build --prefix-paths
```
Now add all versions build folder with folder name as their `version` and add that to the root folder which contains the build files of master.
Remember to update the `URL` (baseurl) in `config.js` with the actual deployment url.
Also update the `currentVersion` in `config.js` everytime a new version is created. 
