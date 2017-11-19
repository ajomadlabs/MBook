// File used for sending HTTP requests via axios

// Import axios to send HTTP requests
import axios from 'axios'

// Making it exportable
export default () => {
  return axios.create({
    baseURL: `http://carehack-api.azurewebsites.net/`
  })
}
