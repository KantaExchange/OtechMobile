const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

config.resolver.extraNodeModules = {
  UI: __dirname + "/UI",
  Components: __dirname + "/Components",
  Screens: __dirname + "/Screens",
  Styles: __dirname + "/Styles",
};

module.exports = config;
