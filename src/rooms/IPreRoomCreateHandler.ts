import { IExecutionResult, IRead } from '../accessors/index';
import { IRoom } from './IRoom';

export interface IPreRoomCreateHandler {
    /**
     * Checks whether the handler actually shall execute.
     * This method can basically implement a filter.
     *
     * @param room
     * @param read
     */
    checkPreRoomCreate(room: IRoom, read: IRead): boolean;

    preRoomCreate(room: IRoom): IExecutionResult;
}
