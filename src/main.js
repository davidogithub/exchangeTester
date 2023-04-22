/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

// Amplify Resources
import { Amplify } from 'aws-amplify';

import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
