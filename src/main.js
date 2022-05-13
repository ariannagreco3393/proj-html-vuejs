import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/scss/bootstrap.scss'

/* Bootstrap */
const bootstrap = require('bootstrap')
Vue.use(bootstrap)



/* Font Awesome icons*/
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons 👇 QUI AGGIUNGI LE ICONE che vuoi usare in camelCase */
import { faClock as fasClock } from '@fortawesome/free-solid-svg-icons'
import { faPhone as fasPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope as fasEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faUser as farUser } from '@fortawesome/free-regular-svg-icons'
import { faTruckRampBox as fasTruckRampBox } from '@fortawesome/free-solid-svg-icons'
import { faTemperatureLow as fasTemperatureLow } from '@fortawesome/free-solid-svg-icons'
import { faBoxesStacked as fasBoxesStacked } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot as fasLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faQuoteRight as fasQuoteRight } from '@fortawesome/free-solid-svg-icons'


/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library 👇 QUI AGGIUNGI IL NOME DELL'ICONA in camelCase*/
library.add(fasClock, fasPhone, fasEnvelope, farUser, fasTruckRampBox, fasTemperatureLow, fasBoxesStacked, fasLocationDot, fasQuoteRight) 

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

/* GOOGLE FONT - POPPINS */
import "@fontsource/poppins"
import "@fontsource/poppins/100.css"
import "@fontsource/poppins/200.css"
import "@fontsource/poppins/500.css"
import "@fontsource/poppins/900.css"



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
