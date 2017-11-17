// Service for sending and receiving data from the hospital endpoint

// Importing the Api.js for HTTP

import Api from '@/services/Api.js'

// Making it exportable

export default {
  mobileotp (userdata) {
    return Api().post('/mobotp', userdata)
  }
}
