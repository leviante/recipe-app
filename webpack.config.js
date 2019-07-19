const path = require("path"); //a node feature that allows us to load libraries that node provides. This path library provides us functions that we can work with paths universally.

module.exports = {
  entry: ["babel-polyfill", "./src/index.js"], //relative path to the place where our code lives (inside src directory, index.js)
  output: {
    path: path.resolve(__dirname, "public/scripts"), //where we want to save webpack output (public/scripts)
    //The catch: What goes inside path value, NEEDS TO BE AN ABSOLUTE PATH UNLIKE ENTRY, which can be relative
    //The problem though, is this path can change
    //eg: When we share code with a friend or when we move the project folder
    //So we don't want to define the path right inside as a string, because that's not flexible
    //provide an absolute path a bit more flexible, use node.js
    //use node.js global variable __dirname
    // __dirname provides the absolute path to the root of your project
    //in this example -> root to the boilerplate folder (public/scripts are not included)
    //Add the rest to the variable
    //but adding two with a plus operator wouldn't work because of different operation systems. Linux, Mac, Windows all have different systems for working with those paths. We need a universal way. Node provides this.
    // check path variable above

    //to change the output file name
    filename: "bundle.js" //property has to be filename
  },
  //Webpack allows us this module property, to customize the modules system, expects an object
  module: {
    //Set another property, allows us to define as many rules as we want (array of objects)
    //One rule we want is to tell webpack to use babel
    rules: [
      {
        //test if the file has .js extension
        test: /\.js$/,
        //Tells which file to apply the rule (use regexp for exclude value)
        exclude: /node_modules/, //Exclude paths that have this anywhere inside
        //Tells the rule what loaders to use
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"]
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"), //tells webpack to serve up this path
    publicPath: "/scripts/"
  },
  devtool: "source-map"
};
