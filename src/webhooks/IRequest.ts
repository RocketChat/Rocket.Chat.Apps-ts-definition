import { RequestMethod } from './RequestMethod';

export interface IRequest {
    method: RequestMethod;
    headers: { [key: string]: string };
    content: any;
}
