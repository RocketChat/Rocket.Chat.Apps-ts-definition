import { IMessageExtend, IMessageRead, IRead } from '../accessors/index';
import { IRoom } from '../rooms/index';
import { IUser } from '../users/index';
import { IMessage } from './IMessage';

export interface IPreMessageSentHandler {
    /**
     * First step when a handler is executed: Enables the handler to signal
     * to the Rocketlets framework whether the it shall actually execute for the message
     * about to be sent.
     *
     * @param message The message which is being sent
     * @param read An accessor to the environment
     * @return true: run the pre-logic
     */
    isApplicable(message: IMessage, read: IRead): boolean;

    /**
     * This method can be used to non-destructively modify the message
     * Due to its nature, this method could be parallelized
     * @param message The message about to be sent
     * @param read An accessor to the environment
     * @param extend An accessor for modifying the messages non-destructively
     */
    extendMessage(message: IMessage, read: IMessageRead, extend: IMessageExtend): void;

    /**
     * This method allows for manipulation of the message to be sent
     * @param message The message about to be sent
     * @param read An accessor to the environment
     * @return The modified message
     */
    manipulateMessage(message: IMessage, read: IMessageRead): IMessage;
}