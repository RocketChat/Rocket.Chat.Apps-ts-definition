import { RequestMethod } from './RequestMethod';

export interface IWebhookRequest {
    method: RequestMethod;
    headers: { [key: string]: string };
    content: any;
}
