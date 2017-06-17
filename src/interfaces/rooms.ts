export interface IRoom {
    _id: string;
    ts: Date;
    t: string;
    name: string;
    msgs: number;
    default: boolean;
    _updatedAt: Date;
    lm: Date;
    usernames: Array<string>;
}
