import { IWebhookRequest } from './IRequest';
import { IWebhookResponse } from './IResponse';
import { RequestMethod } from './RequestMethod';

export interface IWebhookProvider {
    /**
     * Called whenever the publically accessible url for this Rocketlet is called,
     * if you handle the methods differently then split it out so your code doesn't get too big.
     *
     * @param request the actual request made
     * @return the response to send to the client
     */
    executeWebhook(request: IWebhookRequest): IWebhookResponse;
}
