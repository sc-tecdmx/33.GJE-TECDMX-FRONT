import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import axios, { type AxiosInstance } from 'axios'

export type HttpResponse<T> = [null, T] | [Error | any]

class ApiClient {
  api: AxiosInstance
  jwtToken?: string

  constructor(baseUrl: string, jwtToken?: string) {
    this.api = axios.create({
      baseURL: baseUrl
    })
    this.jwtToken = jwtToken

    this.api.defaults.headers.common['Authorization'] = `Token ${jwtToken}`
    this.api.defaults.headers.common['Accept'] = 'application/json'
  }

  public setHeader(jwtToken: string | null): void {
    this.api.defaults.headers.common['Authorization'] = `Token ${jwtToken}`
    this.api.defaults.headers.common['Accept'] = 'application/json'
  }

  protected async axiosGet<T>(config: AxiosRequestConfig): Promise<AxiosResponse | undefined> {
    try {
      const response = await this.api.get<T>(`${config.url}`)
      console.log('axiosGet')
      console.log(response)
      return response
    } catch (error) {
      console.log(error)
    }
  }
  //-------------------
  public async get<T>(resource: string, slug = '' as string): Promise<AxiosResponse | undefined> {
    return this.api.get<T>(`${resource}/${slug}`)
  }

  public async post<T>(resource: string, params: any): Promise<AxiosResponse | undefined> {
    return this.api.post<T>(`${resource}`, params)
  }
  public async update<T>(
    resource: string,
    slug: string,
    params: any
  ): Promise<AxiosResponse | undefined> {
    return this.api.put<T>(`${resource}/${slug}`, params)
  }

  public async put<T>(resource: string, params: any): Promise<AxiosResponse> {
    return this.api.put<T>(`${resource}`, params)
  }

  public async delete<T>(resource: string): Promise<AxiosResponse> {
    return this.api.delete<T>(resource)
  }
}

export default ApiClient
