import ApiClient from '@/core/composables/ApiClient'
import type { TCrud } from '@/core/types/gje/crud.t'

const baseUrl = import.meta.env.VITE_API_GJE + '/api/gje'

import type { AxiosResponse } from 'axios'

export default class CrudGjeService extends ApiClient {
  public constructor() {
    super(baseUrl)
  }

  //--   public async get(catalogo: string, id = '' as string): TCrud
  // const get<T> = async (catalogo: string, id = '' as string):Promise<AxiosResponse | undefined>  => {
  public async getAll<T>(catalogo: string): Promise<TCrud | AxiosResponse | undefined> {
    console.log('getAll - ' + catalogo)
    console.log(`${baseUrl}/${catalogo}`)
    try {
      const response = await super.get<T>(`${baseUrl}/${catalogo}`)
      console.log('getAll - response')
      console.log(response)
      return response?.data as TCrud
    } catch (error) {
      error
    }
  }
  public async getById<T>(
    catalogo: string,
    id = '' as string
  ): Promise<TCrud | AxiosResponse | undefined> {
    try {
      const response = await super.get<T>(catalogo, id)
      console.log(response)
      return response
    } catch (error) {
      error
    }
  }

  public async store<T>(catalogo: string, params: any): Promise<TCrud | AxiosResponse | undefined> {
    try {
      const response = await super.post<T>(catalogo, params)
      console.log('store -[')
      console.log(response)
      console.log(']- store')
      return response?.data as TCrud
    } catch (error) {
      error
    }
  }

  public async update<T>(
    catalogo: string,
    id = '' as string,
    params: any
  ): Promise<TCrud | AxiosResponse | undefined> {
    try {
      const response = await super.put<T>(catalogo, id, params)
      console.log('update -[')
      console.log(response)
      console.log(']- update')
      return response?.data as TCrud
    } catch (error) {
      error
    }
  }
} //--
