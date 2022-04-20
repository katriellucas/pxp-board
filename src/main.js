import './assets/styles/reset.styl'
import './assets/styles/color.styl'
import './assets/styles/ripple.styl'

import App from './App.svelte'

const app = new App({
  target: document.getElementById('app')
})

export default app
