import { IHttp, IMessageBuilder, IPersistence, IRead } from '../accessors';
import { IMessage } from './IMessage';

export interface IPreMessageSentModify {
    /**
     * Enables the handler to signal to the Apps framework whether
     * this handler should actually be executed for the message
     * about to be sent.
     *
     * @param message The message which is being sent
     * @param read An accessor to the environment
     * @param http An accessor to the outside world
     * @return whether to run the execute or not
     */
    checkPreMessageSentModify?(message: IMessage, read: IRead, http: IHttp): boolean;

    /**
     * Method which is to be used to destructively modify the message.
     *
     * @param message The message about to be sent
     * @param builder The builder for modifying the message via methods
     * @param read An accessor to the environment
     * @param http An accessor to the outside world
     * @param persistence An accessor to the App's persistence
     */
    executePreMessageSentModify(message: IMessage, builder: IMessageBuilder, read: IRead, http: IHttp, persistence: IPersistence): IMessage;
}
