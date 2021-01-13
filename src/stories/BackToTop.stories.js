//import { action } from '@storybook/addon-actions'
//import { linkTo } from '@storybook/addon-links'

import BackToTop from '../components/BackToTop.vue'

export default {
  component: BackToTop,
  title: 'Back to top',
  template: '<back-to-top ></back-to-top>',
  parameters: {
    text: 'Top',
  }
}

export const standardUse = () => ({
  components: { BackToTop },
  template: '<p>Please scroll to see something as this is a very long text</p><p>Please scroll to see something as this is a very long text</p><back-to-top></back-to-top> ',
})

export const withText = () => ({
  components: { BackToTop },
  template: '<back-to-top text="top" ></back-to-top>',
})