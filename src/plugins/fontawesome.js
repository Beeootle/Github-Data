// src/plugins/plugin.js
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faEye, faHouse, faArrowLeft, faGear, faPhone, faArrowsRotate, faPlus, faBook, faChartLine, faCodeBranch, 
  faCircleExclamation, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faAddressBook, faAddressCard } from '@fortawesome/free-regular-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

// Add all used icons to the library here
library.add(faEye, faHouse, faAddressBook, faGithub, faArrowLeft, faAddressCard, faGear, faPhone, faArrowsRotate, faPlus, faBook, faChartLine, faCodeBranch, 
  faCircleExclamation, faUserPlus)

export default function registerIcons(app) {
  app.component('font-awesome-icon', FontAwesomeIcon)
}
