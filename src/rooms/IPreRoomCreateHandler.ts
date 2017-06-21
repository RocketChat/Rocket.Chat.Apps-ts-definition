import { IRead } from '../accessors/index';
import { IRoom } from './IRoom';

export interface IPreRoomCreateHandler {
    preRoomCreate(room: IRoom): IRoom;

    isApplicable(message: IRoom, read: IRead): boolean;
}
