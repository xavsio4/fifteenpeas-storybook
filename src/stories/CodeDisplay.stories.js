//import { action } from '@storybook/addon-actions'
//import { linkTo } from '@storybook/addon-links'

import CodeDisplay from '../components/CodeDisplay.vue'

export default {
  component: CodeDisplay,
  title: 'Code Display',
  template: '<code-display ></code-display>',
  parameters: {
    code: 'This helps to display text code fragments inside a page.',
    caption: 'Displays a help/hint under the component'
  }
}

export const standardUse = () => ({
  components: { CodeDisplay },
  template: '<code-display code="//this is your code use /n/n to go to page"></code-display>',
})

export const withCaption = () => ({
  components: { CodeDisplay },
  template: '<code-display code="//this your code" caption="and this is a caption" ></code-display>',
})