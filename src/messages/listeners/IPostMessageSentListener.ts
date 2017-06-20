import { IRoom } from '../../rooms/IRoom';
import { IUser } from '../../users/IUser';
import { IMessage } from '../IMessage';

export interface IPostMessageSent {
    /**
     * Method called *after* the message is sent to the other clients.
     *
     * @param user The user who sent the message
     * @param room The room where the message was sent to
     * @param message The message which was sent
     */
    postMessageSent(user: IUser, room: IRoom, message: IMessage): void;
}
