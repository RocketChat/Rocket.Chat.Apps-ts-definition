import { IExecutionResult, IPersistence, IPersistenceRead, IRead } from '../accessors';
import { IRoom } from './IRoom';

export interface IPreRoomCreateHandler {
    /**
     * Checks whether the handler actually shall execute.
     * This method can basically implement a filter.
     *
     * @param room
     * @param read
     */
    checkPreRoomCreate(room: IRoom, read: IRead, persistence: IPersistenceRead): boolean;

    preRoomCreate(room: IRoom, persistence: IPersistence): IExecutionResult;
}
