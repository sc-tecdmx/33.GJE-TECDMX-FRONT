import ApiClient from '@/core/composables/ApiClient'

import type { AxiosResponse } from 'axios'

export class TipiService extends ApiClient {
  public constructor(baseUrl: string) {
    super(baseUrl)
  }

  public async getAll(): Promise<AxiosResponse | undefined> {
    try {
      const response = this.api.get('posts')
      return response
    } catch (error) {
      error
    }
  }
}
