import { $axios } from './@axios'
import { Search } from './modules/Search'
import { Trending } from './modules/Trending'

$axios.interceptors.request.use()
$axios.interceptors.response.use()

const trending = Trending({ $axios, path: `/v1/gifs/trending?api_key=${process.env.VUE_APP_API_KEY}` })
const search = Search({ $axios, path: `/v1/gifs/search?api_key=${process.env.VUE_APP_API_KEY}` })

export {
  trending,
  search
}
