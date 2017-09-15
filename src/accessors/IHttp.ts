import { IPersistence } from './IPersistence';
import { IRead } from './IRead';
//import HTTP_STATUS_CODES from 'http-status-enum';


/**
 * The Http package allows users to call out to an external web service.
 * Based off of: https://github.com/meteor-typings/meteor/blob/master/1.4/main.d.ts#L869
 */
export interface IHttp {
    get(url: string, options?: IHttpRequest): IHttpResponse;

    post(url: string, options?: IHttpRequest): IHttpResponse;

    put(url: string, options?: IHttpRequest): IHttpResponse;

    del(url: string, options?: IHttpRequest): IHttpResponse;
}

export enum RequestMethod {
    GET = 'get',
    POST = 'post',
    PUT = 'put',
    DELETE = 'delete',
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
    url: string;
    method: RequestMethod;
    statusCode: number;
    headers?: {
        [key: string]: string,
    };
    content?: string;
    data?: any;
}

export interface IHttpExtend {
    /**
     * A method for providing a single header which is added to every request.
     *
     * @param key the name of the header
     * @param value the header's content
     */
    provideDefaultHeader(key: string, value: string): void;

    /**
     * A method for providing more than one header which are added to every request.
     *
     * @param headers an object with strings as the keys (header name) and strings as values (header content)
     */
    provideDefaultHeaders(headers: { [key: string]: string }): void;

    /**
     * A method for providing a single query parameter which is added to every request.
     *
     * @param key the name of the query parameter
     * @param value the query parameter's content
     */
    provideDefaultParam(key: string, value: string): void;

    /**
     * A method for providing more than one query parameters which are added to every request.
     *
     * @param headers an object with strings as the keys (parameter name) and strings as values (parameter content)
     */
    provideDefaultParams(params: { [key: string]: string }): void;

    /**
     * Method for providing a function which is called before every request is called out to the final destination.
     * This can be called more than once which means there can be more than one handler. The order provided is the order called.
     * Note: if this handler throws an error when it is executed then the request will be aborted.
     *
     * @param handler the instance of the IHttpPreRequestHandler
     */
    providePreRequestHandler(handler: IHttpPreRequestHandler): void;

    /**
     * Method for providing a function which is called after every response is got from the url and before the result is returned.
     * This can be called more than once which means there can be more than one handler. The order provided is the order called.
     * Note: if this handler throws an error when it is executed then the respone will not be returned
     *
     * @param handler the instance of the IHttpPreResponseHandler
     */
    providePreResponseHandler(handler: IHttpPreResponseHandler): void;

    /**
     * A method for getting all of the default headers provided, the value is a readonly and any modifications done will be ignored.
     * Please use the provider methods for adding them.
     */
    getDefaultHeaders(): Map<string, string>;

    /**
     * A method for getting all of the default parameters provided, the value is a readonly and any modifications done will be ignored.
     * Please use the provider methods for adding them.
     */
    getDefaultParams(): Map<string, string>;

    /**
     * A method for getting all of the pre-request handlers provided, the value is a readonly and any modifications done will be ignored.
     * Please use the provider methods for adding them.
     */
    getPreRequestHandlers(): Array<IHttpPreRequestHandler>;

    /**
     * A method for getting all of the pre-response handlers provided, the value is a readonly and any modifications done will be ignored.
     * Please use the provider methods for adding them.
     */
    getPreResponseHandlers(): Array<IHttpPreResponseHandler>;
}

export interface IHttpPreRequestHandler {
    executePreHttpRequest(url: string, request: IHttpRequest, read: IRead, persistence: IPersistence): IHttpRequest;
}

export interface IHttpPreResponseHandler {
    executePreHttpResponse(response: IHttpResponse, read: IRead, persistence: IPersistence): IHttpResponse;
}
