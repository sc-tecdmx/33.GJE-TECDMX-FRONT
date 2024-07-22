import ApiClient from '@/core/composables/ApiClient'

import type { AxiosResponse } from 'axios'

export default class MedioImpugnacionService extends ApiClient {
  public constructor(baseUrl: string) {
    super(baseUrl)
  }

  public async getAll(): Promise<AxiosResponse | undefined> {
    try {
      const reponse = this.api.get('/api/gje/medio')
      return reponse
    } catch (error) {
      error
    }
  }
}
