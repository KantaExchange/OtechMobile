module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"], // Base directory for absolute imports
          alias: {
            UI: "./UI",
            Components: "./Components",
            Screens: "./Screens",
            Styles: "./Styles",
          },
        },
      ],
    ],
  };
};
