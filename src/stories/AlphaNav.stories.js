//import { action } from '@storybook/addon-actions'
//import { linkTo } from '@storybook/addon-links'

import AlphaNav from '../components/AlphaNav.vue'

export default {
  component: AlphaNav,
  title: 'Alpha Nav',
  template: '<alpha-nav direction="vertical" :showClear="true" clearLinkText="reset" @clear="clear" @selected="selectedAlpha"></alpha-nav>',
  parameters: {
    direction: 'vertical',
  }
}

export const standardUse = () => ({
  components: { AlphaNav },
  template: '<alpha-nav direction="vertical" :showClear="true" clearLinkText="reset" @clear="clear" @selected="selectedAlpha"></alpha-nav>',
})

export const withHorizontal = () => ({
  components: { AlphaNav },
  template: '<alpha-nav direction="horizontal" :showClear="true" clearLinkText="reset" @clear="clear" @selected="selectedAlpha"></alpha-nav>',
})

export const withText = () => ({
  components: { AlphaNav },
  template: '<alpha-nav direction="vertical" :showClear="true" clearLinkText="reset" @clear="clear" @selected="selectedAlpha"></alpha-nav>',
})