import { IMessage } from '../messages/index';
import { IRoom } from '../rooms/IRoom';
import { IUser } from '../users/IUser';

/**
 * This accessor provides methods for accessing
 * messages in a read-only-fashion.
 */
export interface IMessageRead {
    getById(id: string): IMessage | undefined;

    getSenderUser(messageId: string): IUser | undefined;

    getRoom(messageId: string): IRoom | undefined;
}
