/**
 * The Http package allows users to call out to an external web service.
 * Based off of: https://github.com/meteor-typings/meteor/blob/master/1.4/main.d.ts#L869
 */
export interface IHttp {
    get(url: string, options?: IHttpRequest): IHttpResponse;

    put(url: string, options?: IHttpRequest): IHttpResponse;

    post(url: string, options?: IHttpRequest): IHttpResponse;

    del(url: string, options?: IHttpRequest): IHttpResponse;
}

export interface IHttpRequest {
    content?: string;
    data?: any;
    query?: string;
    params?: {
        [key: string]: string,
    };
    auth?: string;
    headers?: {
        [key: string]: string,
    };
    timeout?: number;
}

export interface IHttpResponse {
    statusCode: number;
    headers?: {
        [key: string]: string,
    };
    content?: string;
    data?: any;
}
