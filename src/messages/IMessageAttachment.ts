import { IMessageAttachmentAuthor } from './IMessageAttachmentAuthor';
import { IMessageAttachmentField } from './IMessageAttachmentField';
import { IMessageAttachmentTitle } from './IMessageAttachmentTitle';

/**
 * Interface which represents an attachment which can be added to a message.
 */
export interface IMessageAttachment {
    /** A unquie id for this attachment. */
    id: string;
    /** Causes the image, audio, and video sections to be hidding when this is true. */
    collapsed?: boolean;
    /** The color you want the order on the left side to be, supports any valid background-css value. */
    color?: string; // TODO: Maybe we change this to a Color class which has helper methods?
    /** The text to display for this attachment. */
    text?: string;
    /** Displays the time next to the text portion. */
    timestamp?: Date;
    /** Only applicable if the timestamp is provided, as it makes the time clickable to this link. */
    timestampLink?: string;
    /** An image that displays to the left of the text, looks better when this is relatively small. */
    thumbnailUrl?: string;
    /** Author portion of the attachment. */
    author?: IMessageAttachmentAuthor;
    /** Title portion of the attachment. */
    title?: IMessageAttachmentTitle;
    /** The image to display, will be "big" and easy to see. */
    imageUrl?: string;
    /** Audio file to play, only supports what html's <audio> does. */
    audioUrl?: string;
    /** Video file to play, only supports what html's <video> does. */
    videoUrl?: string;
    /** The field property of the attachments allows for "tables" or "columns" to be displayed on messages. */
    fields?: Array<IMessageAttachmentField>;
}
