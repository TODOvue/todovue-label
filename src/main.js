import { createApp } from 'vue'
import './style.css'
import TvLabel from './demo/Demo.vue'
import "vue-highlight-code/dist/style.css";
import '../src/assets/scss/_global.scss'

createApp(TvLabel).mount('#tv-label')
