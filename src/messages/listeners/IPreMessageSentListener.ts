import { IRoom } from '../../rooms/IRoom';
import { IUser } from '../../users/IUser';
import { IMessage } from '../IMessage';

export interface IPreMessageSent {
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
