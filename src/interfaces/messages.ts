export interface IMessage {
    id: string;
    roomId: string;
    text: string;
    sender: IMessageUser;
    createdAt: Date;
    updatedAt: Date;
}

export interface IMessageUser {
    _id: string;
    username: string;
    name: string;
}
