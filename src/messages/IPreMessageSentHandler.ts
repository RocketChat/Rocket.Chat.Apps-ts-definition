import { IRoom } from '../rooms/index';
import { IUser } from '../users/index';
import { IMessage } from './IMessage';

export interface IPreMessageSentHandler {
    /**
     * Method called when before the message is sent to other clients.
     * Return the message object with your changes to it.
     *
     * @param user The user who is sending the message
     * @param room The room where the message is being sent to
     * @param message The message which is being sent
     * @return the changed message type
     */
    preMessageSent(user: IUser, room: IRoom, message: IMessage): IMessage;
}
