import axios from 'axios'
import { config } from './config'

const $axios = axios.create(config)

export { $axios }
