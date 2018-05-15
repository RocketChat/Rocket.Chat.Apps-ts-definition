import { IMessage } from '../messages/index';
import { IRoom } from '../rooms/index';
import { IUser } from '../users/index';

/**
 * This accessor provides methods for accessing
 * rooms in a read-only-fashion.
 */
export interface IRoomRead {
    getById(id: string): Promise<IRoom | undefined>;

    getByName(name: string): Promise<IRoom | undefined>;

    getMessages(roomId: string): Promise<IterableIterator<IMessage>>;

    getMembers(roomId: string): Promise<IterableIterator<IUser>>;
}
