import { IMessageAttachment } from './IMessageAttachment';
import { IMessageUser } from './IMessageUser';

export interface IMessage {
    id: string;
    roomId: string;
    text: string;
    sender: IMessageUser;
    createdAt: Date;
    updatedAt?: Date;
    emoji?: string;
    avatar?: string;
    attachments?: Array<IMessageAttachment>;
}
