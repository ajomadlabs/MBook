// Service for sending and receiving data from the register endpoint

// Importing the Api.js for HTTP

import Api from '@/services/Api.js'

// Making it exportable

export default {
  login () {
    return Api().get('/auth/google')
  }
}
