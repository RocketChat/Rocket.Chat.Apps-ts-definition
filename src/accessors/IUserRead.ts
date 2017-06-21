/**
 * The RocketChatRead accessor provides methods for accessing the
 * rooms in a read-only-fashion.
 */

import { IRoom } from '../rooms/index';

export interface IRoomRead {
    getRoomById(roomId: string): IRoom;

    getRoomByName(roomName: string): IRoom;

}
