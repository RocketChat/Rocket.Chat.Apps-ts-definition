import { IMessage } from '../messages/index';
import { IRoom } from '../rooms/index';
import { IUser } from '../users/index';
import { IIterator } from './IIterator';

/**
 * This accessor provides methods for accessing
 * rooms in a read-only-fashion.
 */
export interface IRoomRead {
    getById(id: string): IRoom | undefined;

    getByName(name: string): IRoom | undefined;

    getMessages(roomId: string): IIterator<IMessage>;

    getMembers(roomId: string): IIterator<IUser>;
}
