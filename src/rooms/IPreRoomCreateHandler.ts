import { IRead } from '../accessors/index';
import { IRoom } from './IRoom';

export interface IPreRoomCreateHandler {
    preRoomCreate(room: IRoom): IRoom;

    isRoomApplicable(message: IRoom, read: IRead): boolean;
}
