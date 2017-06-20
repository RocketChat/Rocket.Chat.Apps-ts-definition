import { IUserEmail } from './IUserEmail';
import { UserStatusConnection } from './UserStatusConnection';
import { UserType } from './UserType';

export interface IUser {
    id: string;
    username: string;
    emails: Array<IUserEmail>;
    type: UserType;
    name: string;
    roles: Array<string>;
    lastLogin: Date;
    statusConnection: UserStatusConnection;
    utcOffset: number;
    createdAt: Date;
    updatedAt: Date;
}
