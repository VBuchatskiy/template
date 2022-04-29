import { AxiosInstance, AxiosResponse } from 'axios'

const Trending = ({ $axios, path }: { $axios: AxiosInstance, path: string }) => ({
  async get ({ params }: { params: { limit?: string, offset?: string } }): Promise<AxiosResponse> {
    const query = new URLSearchParams(params).toString()

    return await $axios.get(query ? path.concat('&', query) : path)
  }
})

export {
  Trending
}
