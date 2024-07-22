import { AbstractApiService } from './AbstractApiService';

export abstract class AbstractCrudApiService extends AbstractApiService {
  protected constructor(baseURL: string, jwtToken?: string) {
    super(baseURL, jwtToken);
  }
}