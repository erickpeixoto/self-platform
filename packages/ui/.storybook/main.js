// .storybook/main.js

const path = require("path");

module.exports = {
  stories: [
    "../**/*.stories.@(js|jsx|ts|tsx)",
    "../../../apps/portfolio/**/**/stories.@(js|jsx|ts|tsx)",
  ],
  /** Expose public folder to storybook as static */
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      /**
       * Fix Storybook issue with PostCSS@8
       * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
       */
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  core: {
    builder: "webpack5",
  },
};
