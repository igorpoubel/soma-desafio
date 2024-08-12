export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export type HttpResponse<T = any> = {
  data: T;
};

export interface IHttpClient<T = any> {
  request: (method: HttpMethod, url: string) => Promise<HttpResponse<T>>;
}
