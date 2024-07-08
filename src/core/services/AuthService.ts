import ApiClient from '@/core/composables/ApiClient'

import type { AxiosResponse } from 'axios'

export default class AuthService extends ApiClient {
  public constructor() {
    super(import.meta.env.VITE_APP_API_URL)
  }
}
