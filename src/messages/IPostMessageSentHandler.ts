import { IHttp } from '../accessors/IHttp';
import { IRead } from '../accessors/index';
import { IMessage } from './IMessage';

export interface IPostMessageSentHandler {
    /**
     * First step when a handler is executed: Enables the handler to signal
     * to the Rocketlets framework whether handler shall actually execute for the message
     * about to be sent.
     *
     * @param message The message which is being sent
     * @param read An accessor to the environment
     * @return true: run the pre-logic
     */
    checkPostMessageSent(message: IMessage, read: IRead): boolean;

    /**
     * Method called *after* the message is sent to the other clients.
     *
     * @param message The message which was sent
     */
    communicatePostMessageSent(message: IMessage, read: IRead, http: IHttp): void;
}
