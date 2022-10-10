import axios from "axios"

const client = axios.create()

// client.defaults.baseURL = "http://localhost:8000/api/"
// client.defaults.baseURL = "http://192.168.100.30:8000/api/"
client.defaults.baseURL =
  "https://cors-everywhere.herokuapp.com/http://ec2-18-142-114-177.ap-southeast-1.compute.amazonaws.com:8000/api/"

export default client
