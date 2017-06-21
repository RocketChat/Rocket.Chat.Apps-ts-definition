import { IRoom } from './IRoom';

export interface IPreRoomCreateHandler {
    preRoomCreate(room: IRoom): IRoom;
}
