import { IExecutionResult, IRead } from '../accessors';
import { IRoom } from './IRoom';

export interface IPostRoomCreateHandler {
    /**
     * Checks whether the handler actually shall execute.
     * This method can basically implement a filter.
     * @param room
     * @param read
     */
    checkPostRoomCreate(room: IRoom, read: IRead);

    postRoomCreate(room: IRoom): IExecutionResult;
}
