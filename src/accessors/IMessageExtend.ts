import { IMessageAttachment } from '../messages/IMessageAttachment';
import { IMessage } from '../messages/index';

/**
 * This accessor provides methods for manipulating messages in a non-destructive fashion
 */
export interface IMessageExtend {

    addAttachments(messageId: string, attachments: Array<IMessageAttachment>);

    addMetadata(messageId: string, metadata: object);
}
