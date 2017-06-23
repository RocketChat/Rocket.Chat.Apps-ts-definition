import { IHttp, IRead } from '../accessors/index';
import { IMessage } from './IMessage';

export interface IPostMessageSentHandler {
    /**
     * Enables the handler to signal to the Rocketlets framework whether
     * this handler should actually be executed for after the message
     * has been sent.
     *
     * @param message The message which was sent
     * @param read An accessor to the environment
     * @param http An accessor to the outside world
     * @return whether to run the executor function
     */
    checkPostMessageSent?(message: IMessage, read: IRead, http: IHttp): boolean;

    /**
     * Method called *after* the message is sent to the other clients.
     *
     * @param message The message which was sent
     * @param read An accessor to the environment
     * @param http An accessor to the outside world
     */
    executePostMessageSent(message: IMessage, read: IRead, http: IHttp): void;
}
