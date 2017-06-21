import { IRoom } from './IRoom';

export interface IPostRoomCreateHandler {
    postRoomCreate(room: IRoom): void;
}
