import { RequestMethod } from './RequestMethod';

export interface IRequest {
    method: RequestMethod;
    headers: { [s: string]: string };
    content: any;
}
