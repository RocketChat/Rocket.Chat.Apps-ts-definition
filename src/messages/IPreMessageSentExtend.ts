import { IHttp, IMessageExtend, IPersistence, IRead } from '../accessors';
import { IMessage } from './IMessage';

/**
 * Handler called when a Rocketlet wants to enrich a message.
 */
export interface IPreMessageSentExtend {
    /**
     * Enables the handler to signal to the Rocketlets framework whether
     * this handler should actually be executed for the message
     * about to be sent.
     *
     * @param message The message which is being sent
     * @param read An accessor to the environment
     * @param http An accessor to the outside world
     * @return whether to run the execute or not
     */
    checkPreMessageSentExtend?(message: IMessage, read: IRead, http: IHttp): boolean;

    /**
     * Method which is to be used to non-destructively enrich the message.
     *
     * @param message The message about to be sent
     * @param extend An accessor for modifying the messages non-destructively
     * @param read An accessor to the environment
     * @param http An accessor to the outside world
     */
    // TODO: Determine a better result of this method
    executePreMessageSentExtend(message: IMessage,
                                extend: IMessageExtend,
                                read: IRead,
                                http: IHttp,
                                persistence: IPersistence): IMessage;
}
