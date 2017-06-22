import { IRoom } from './IRoom';
import { IRead } from '../accessors/IRead';

export interface IPostRoomCreateHandler {
    /**
     * Checks whether the handler actually shall execute.
     * This method can basically implement a filter.
     * @param room
     * @param read
     */
    checkPostRoomCreate(room: IRoom, read: IRead);

    postRoomCreate(room: IRoom): void;
}
