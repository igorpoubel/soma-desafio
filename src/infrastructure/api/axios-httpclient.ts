import axios, { AxiosInstance } from "axios";
import {
  HttpMethod,
  HttpResponse,
  IHttpClient,
} from "@/src/infrastructure/interfaces/httpclient";

export class AxiosHttpClient implements IHttpClient {
  private instance: AxiosInstance;
  constructor(private baseUrl: string) {
    this.instance = axios.create({
      baseURL: baseUrl,
    });
  }
  async request(method: HttpMethod, url: string): Promise<HttpResponse> {
    const { data } = await this.instance.request({ method, url });
    return { data };
  }
}
