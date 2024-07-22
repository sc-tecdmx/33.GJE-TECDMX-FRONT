import { AbstractApiService } from "@/core/services/axios/AbstractApiService";
import type { TCrud } from '@/core/types/gje/crud.t'

export default class SingletonService<Service extends AbstractApiService> {
  private readonly SINGLETON: Map<string, Service> = new Map<string, Service>();

  public constructor(
    private readonly serviceName: string,
    private readonly serviceClass: new (baseUrl: string) => Service
  ) {}

  public instance(baseUrl: string): Service {
    console.debug(`Instancia  ${this.serviceName} para baseUrl '${baseUrl}'`);
    if (this.SINGLETON.has(baseUrl)) {
      console.debug(`Retomando una instancia de ${this.serviceName} para baseUrl '${baseUrl}'`);
      return this.SINGLETON.get(baseUrl)!;
    }

    console.debug(`Creando una instancia de ${this.serviceName} para baseUrl '${baseUrl}'`);

    const instance: Service = new this.serviceClass(baseUrl);
    this.SINGLETON.set(baseUrl, instance);

    return instance;
  }
}