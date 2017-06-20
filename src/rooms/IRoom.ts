import { RoomType } from './RoomType';

export interface IRoom {
    id: string;
    name: string;
    type: RoomType;
    msgs: number;
    isDefault: boolean;
    createdAt: Date;
    updatedAt: Date;
    lastModifiedAt: Date;
    usernames: Array<string>;
}
