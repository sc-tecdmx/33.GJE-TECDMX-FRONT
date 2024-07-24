import type { AxiosResponse } from 'axios'
import  SingletonService  from './SingletonService'
import { AbstractCrudApiService } from './AbstractCrudApiService';
import type { TCrud } from '@/core/types/gje/crud.t'

const baseUrl = import.meta.env.VITE_GJE_API + '/api/gje'
const jwtToken= '';

class CrudApiService extends AbstractCrudApiService {
    public constructor() {
      super(baseUrl , jwtToken );
    }

    public getAll<T>(catalogo: string): Promise<T | AxiosResponse| undefined> {
        console.log(`CrudApiService.getAll(): [${baseUrl}][${catalogo}]`)
        return this.http.get<T>(`${catalogo}`)
        .then( this.handleResponse.bind(this))
        .catch(this.handleError.bind(this))
    }

    public async getById<T>(
      catalogo: string,
      id = '' as string
    ): Promise<T | AxiosResponse | undefined> {
      console.log(`CrudApiService.getById(): [${baseUrl}][${catalogo}][${id}]`)
      return this.http.get<T>(`${catalogo}/${(id===''?'*****' : id)}`)
      .then( this.handleResponse.bind(this))
      .catch(this.handleError.bind(this))
   }

   public async store<T>(catalogo: string, params: any): Promise<T | AxiosResponse | undefined> {
    console.log(`CrudApiService.store(): [${catalogo}][...]`)
      return this.http.post<T>(`${catalogo}`, params)
      .then( this.handleResponse.bind(this))
      .catch(this.handleError.bind(this))
  }

  public async update<T>(catalogo: string,id = '' as string, params: any): Promise<T | AxiosResponse | undefined> {
    console.log(`CrudApiService.update(): [${catalogo}]/[${id}][...]`)
      return this.http.put<T>(`${catalogo}/${id}`, params)
      .then( this.handleResponse.bind(this))
      .catch(this.handleError.bind(this))
  }

  public async delete<T>(catalogo: string,id = '' as string, params: any): Promise<T | AxiosResponse | undefined> {
    console.log(`CrudApiService.delete(): [${catalogo}]/[${id}][...]`)
      return this.http.delete<T>(`${catalogo}/${id}`, params)
      .then( this.handleResponse.bind(this))
      .catch(this.handleError.bind(this))
  }
}

const singletonCrudApiService: SingletonService<CrudApiService> 
  = new SingletonService<CrudApiService>(
    'CrudApiService',  CrudApiService
);
  
  export function crudApiService(): CrudApiService {
    console.log('crudApiService:' + `${baseUrl}`)
    return singletonCrudApiService.instance(`${baseUrl}`);
  }