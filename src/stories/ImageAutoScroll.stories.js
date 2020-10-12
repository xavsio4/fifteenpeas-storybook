//import { action } from '@storybook/addon-actions'
//import { linkTo } from '@storybook/addon-links'

import ImageAutoScroll from '../components/ImageAutoScroll.vue'

export default {
  component: ImageAutoScroll,
  title: 'Image auto scroll',
  template: '<image-auto-scroll ></image-auto-scroll>',
  parameters: {
    notes: 'This compoents suits a portfolio section to display images with very long height, like a website screen snapshot',
  }
}

export const standardUse = () => ({
  components: { ImageAutoScroll },
  template: '<image-auto-scroll ></image-auto-scroll>',
})

export const withUnderText = () => ({
  components: { ImageAutoScroll },
  template: '<image-auto-scroll ></image-auto-scroll>',
})