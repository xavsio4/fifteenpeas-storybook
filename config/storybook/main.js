module.exports = {
  stories: [
    '../../src/stories/Intro.stories.mdx',
    '../../src/**/*.stories.mdx',
    '../../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-actions',
    {
      name: '@storybook/addon-docs',
      options: {
        babelOptions: {
          presets: [
            [
              '@vue/cli-plugin-babel/preset',
              {
                jsx: false
              }
            ]
          ]
        }
      }
    },
    '@storybook/addon-knobs',
<<<<<<< HEAD
    '@storybook/addon-links'
=======
    '@storybook/addon-links',
    '@storybook/addon-essentials'
>>>>>>> 20176f8... - added components
  ]
}
