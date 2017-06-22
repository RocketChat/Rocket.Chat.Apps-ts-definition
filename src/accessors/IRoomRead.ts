import { IMessage } from '../messages/index';
import { IRoom } from '../rooms/index';
import { IUser } from '../users/index';
import { IIterator } from './IIterator';

/**
 * This accessor provides methods for accessing
 * rooms in a read-only-fashion.
 */
export interface IRoomRead {
    getById(id: string): IRoom;

    getByName(name: string): IRoom;

    getMessages(roomId: string): IIterator<IMessage>;

    getMembers(roomId: string): Array<IUser>;
}
