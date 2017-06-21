import { IRoom } from '../rooms/index';
import { IUser } from '../users/index';
import { IMessage } from './IMessage';

export interface IPostMessageSentHandler {
    /**
     * Method called *after* the message is sent to the other clients.
     *
     * @param user The user who sent the message
     * @param room The room where the message was sent to
     * @param message The message which was sent
     */
    postMessageSent(user: IUser, room: IRoom, message: IMessage): void;
}
