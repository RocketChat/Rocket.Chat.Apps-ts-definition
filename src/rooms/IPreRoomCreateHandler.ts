import { IExecutionResult, IHttp, IPersistence, IRead } from '../accessors';
import { IRoom } from './IRoom';

export interface IPreRoomCreateHandler {
    /**
     * Checks whether the handler actually shall execute.
     * This method can basically implement a filter.
     *
     * @param room The room which was created
     * @param read An accessor to the environment
     * @param http An accessor to the outside world
     * @return whether to run the execute or not
     */
    checkPreRoomCreate?(room: IRoom, read: IRead, http: IHttp): boolean;

    preRoomCreate(room: IRoom, read: IRead, http: IHttp, persistence: IPersistence): IExecutionResult;
}
