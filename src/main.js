import { createApp } from 'vue'
import '../style/general.scss'
import App from './App.vue'
import '../style/variable.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import YouTubeEmbed from 'youtube-embed'

createApp(App).use(YouTubeEmbed).mount('#app')
