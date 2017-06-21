import { IRead } from '../accessors/index';
import { IRoom } from '../rooms/index';
import { IUser } from '../users/index';
import { IMessage } from './IMessage';

export interface IPostMessageSentHandler {
    /**
     * First step when a handler is executed: Enables the handler to signal
     * to the Rocketlets framework whether the it shall actually execute for the message
     * about to be sent.
     *
     * @param message The message which is being sent
     * @param read An accessor to the environment
     * @return true: run the pre-logic
     */
    isMessageApplicable(message: IMessage, read: IRead): boolean;

    /**
     * Method called *after* the message is sent to the other clients.
     *
     * @param user The user who sent the message
     * @param room The room where the message was sent to
     * @param message The message which was sent
     */
    postMessageSent(user: IUser, room: IRoom, message: IMessage): void;
}
