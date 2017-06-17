export interface IRequest {
    method: string;
    content: any;
}

export interface IResponse {
    status: number;
    content?: any;
}

export enum RequestMethod {
    GET,
    POST,
    PUT,
    DELETE,
}

export enum ResponseStatus {
    SUCCESS = 200,
    NOT_FOUND = 404,
    UNIMPLEMENTED = 501,
}
