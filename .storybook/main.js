const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-controls",
    "@storybook/addon-storysource",
    "@storybook/addon-docs",
    "storybook-addon-react-docgen",
    "storybook-addon-sass-postcss",
  ],
  framework: "@storybook/react",
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => {
        return prop.parent
          ? /@material-ui/.test(prop.parent.fileName) ||
              !/node_modules/.test(prop.parent.fileName)
          : true;
      },
    },
  },
  webpackFinal: async (config) => {
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin(),
    ];

    return config;
  },
};
