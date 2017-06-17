export interface IUser {
    _id: string;
    createdAt: Date;
    username: string;
    emails: Array<IUserEmail>;
    type: UserType;
    name: string;
    _updatedAt: Date;
    roles: Array<string>;
    lastLogin: Date;
    statusConnection: UserStatusConnection;
    utcOffset: number;
}

export interface IUserEmail {
    address: string;
    verified: boolean;
}

export enum UserType {
    USER,
    BOT,
}

export enum UserStatusConnection {
    OFFLINE,
    ONLINE,
    AWAY,
    INVISIBLE,
}
