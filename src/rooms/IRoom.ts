import { IUser } from '../users';
import { RoomType } from './RoomType';

export interface IRoom {
    id: string;
    name: string;
    type: RoomType;
    creator: IUser;
    usernames: Array<string>;
    isDefault?: boolean;
    messageCount?: number;
    createdAt?: Date;
    updatedAt?: Date;
    lastModifiedAt?: Date;
}
