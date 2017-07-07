import { IMessage, IMessageAttachment, IMessageUser } from '../messages';
import { IRoom, RoomType } from '../rooms';

export interface IBuilder {
    buildMessage(msg?: IMessage): IMessageBuilder;
    modifyMessage(msgId: string): IMessageBuilder;
    buildRoom(room?: IRoom): IRoomBuilder;
    modifyRoom(roomId: string): IRoomBuilder;
}

export interface IMessageBuilder {
    setText(text: string): IMessageBuilder;
    setSender(sender: IMessageUser): IMessageBuilder;
    setEmojiAvatar(emoji: string): IMessageBuilder;
    setAvatarUrl(avatarUrl: string): IMessageBuilder;
    addAttachment(attachment: IMessageAttachment): IMessageBuilder;
    getMessage(): IMessage;
    finish(): IMessage;
}

export interface IRoomBuilder {
    setName(name: string): IRoomBuilder;
    setType(type: RoomType): IRoomBuilder;
    setDefault(isDefault: boolean): IRoomBuilder;
    addUsername(username: string): IRoomBuilder;
    setUsers(users: Array<string>): IRoomBuilder;
    getRoom(): IRoom;
    finish(): IRoom;
}
