import { IExecutionResult, IHttp, IRead } from '../accessors';
import { IRoom } from './IRoom';

export interface IPostRoomCreateHandler {
    /**
     * Enables the handler to signal to the Rocketlets framework whether
     * this handler should actually be executed for after the room
     * has been created.
     *
     * @param room The room which was created
     * @param read An accessor to the environment
     * @param http An accessor to the outside world
     * @return whether to run the execute or not
     */
    checkPostRoomCreate?(room: IRoom, read: IRead, http: IHttp): boolean;

    /**
     * Method called *after* the room has been created.
     *
     * @param room The room which was created
     * @param read An accessor to the environment
     * @param http An accessor to the outside world
     * @return the result of this execution
     */
    executePostRoomCreate(room: IRoom, read: IRead, http: IHttp): IExecutionResult;
}
