import { IMessage, IMessageAttachment } from '../messages';
import { IRoom, RoomType } from '../rooms';
import { IUser } from '../users';

export interface IModify {
    getCreator(): IModifyCreator;

    getExtender(): IModifyExtender;

    getUpdater(): IModifyUpdater;
}

export interface IModifyUpdater {
    /**
     * Modifies an existing message.
     * Raises an exception if a non-existent messageId is supplied
     *
     * @param messageId the id of the existing message to modfiy and build
     * @param updater the user who is updating the message
     */
    message(messageId: string, updater: IUser): IMessageBuilder;

    /**
     * Modifies an existing room.
     * Raises an exception if a non-existent roomId is supplied
     *
     * @param roomId the id of the existing room to modify and build
     * @param updater the user who is updating the room
     */
    room(roomId: string, updater: IUser): IRoomBuilder;

    /**
     * Finishes the updating process, saving the object to the database.
     *
     * @param builder the builder instance
     * @return whether it was successful or not
     */
    finish(builder: IMessageBuilder | IRoomBuilder): boolean;
}

export interface IModifyExtender {
    /**
     * Modifies a message in a non-destructive way: Properties can be added to it,
     * but existing properties cannot be changed.
     *
     * @param messageId the id of the message to be extended
     * @return the extender instance for the message
     */
    extendMessage(messageId: string): IMessageExtender;

    /**
     * Modifies a room in a non-destructive way: Properties can be added to it,
     * but existing properties cannot be changed.
     *
     * @param roomId the id of the room to be extended
     * @return the extender instance for the room
     */
    extendRoom(roomId: string): IRoomExtender;

    /**
     * Finishes the extending process, saving the object to the database.
     *
     * @param extender the extender instance
     * @return whether it was successful or not
     */
    finish(extender: IRoomExtender | IMessageExtender): boolean;
}

export interface IModifyCreator {
    /**
     * Starts the process for building a new message object.
     *
     * @param data (optional) the initial data to pass into the builder,
     *          the `id` property will be ignored
     * @return an IMessageBuilder instance
     */
    startMessage(data?: IMessage): IMessageBuilder;

    /**
     * Starts the process for building a new room.
     *
     * @param data (optional) the initial data to pass into the builder,
     *          the `id` property will be ignored
     * @return an IRoomBuilder instance
     */
    startRoom(data?: IRoom): IRoomBuilder;

    /**
     * Finishes the creating process, saving the object to the database.
     *
     * @param builder the builder instance
     * @return whether it was successful or not
     */
    finish(builder: IMessageBuilder | IRoomBuilder): boolean;
}

export interface IMessageExtender {
    addProperty(name: string, value: object): IMessageExtender;

    addAttachments(attachments: Array<IMessageAttachment>): IMessageExtender;

    /**
     * A specialization of addProperty: Add metadata enabling interaction with the plugin
     * @param metadata
     */
    addPluginMetadata(metadata: object): IMessageExtender;
}

export interface IRoomExtender {
    addProperty(name: string, value: object): IRoomExtender;

    addMember(user: IUser): IRoomExtender;

    /**
     * A specialization of addProperty: Add metadata enabling interaction with the plugin
     * @param metadata
     */
    addPluginMetadata(metadata: object): IRoomExtender;
}

/**
 * Interface for building out a message.
 * Please note, that a room and sender must be associated otherwise you will NOT
 * be able to successfully save the message object.
 */
export interface IMessageBuilder {
    /**
     * Sets the room where this message should be sent to.
     *
     * @param room the room where to send
     */
    setRoom(room: IRoom): IMessageBuilder;

    /**
     * Sets the sender of this message.
     *
     * @param sender the user sending the message
     */
    setSender(sender: IUser): IMessageBuilder;

    /**
     * Sets the text of the message.
     *
     * @param text the actual text
     */
    setText(text: string): IMessageBuilder;

    /**
     * Sets the emoji to use for the avatar, this overwrites the current avatar
     * whether it be the user's or the avatar url provided.
     *
     * @param emoji the emoji code
     */
    setEmojiAvatar(emoji: string): IMessageBuilder;

    /**
     * Sets the url which to display for the avatar, this overwrites the current
     * avatar whether it be the user's or an emoji one.
     *
     * @param avatarUrl image url to use as the avatar
     */
    setAvatarUrl(avatarUrl: string): IMessageBuilder;

    /**
     * Sets the display text of the sender's username that is visible.
     *
     * @param alias the username alias to display
     */
    setUsernameAlias(alias: string): IMessageBuilder;

    /**
     * Adds one attachment to the message's list of attachments, this will not
     * overwrite any existing ones but just adds.
     *
     * @param attachment the attachment to add
     */
    addAttachment(attachment: IMessageAttachment): IMessageBuilder;

    /**
     * Sets the attachments for the message, replacing and destroying all of the current attachments.
     *
     * @param attachments array of the attachments
     */
    setAttachments(attachments: Array<IMessageAttachment>): IMessageBuilder;

    /**
     * Replaces an attachment at the given position (index).
     * If there is no attachment at that position, there will be an error thrown.
     *
     * @param position the index of the attachment to replace
     * @param attachment the attachment to replace with
     */
    replaceAttachment(position: number, attachment: IMessageAttachment): IMessageBuilder;

    /**
     * Removes an attachment at the given position (index).
     * If there is no attachment at that position, there will be an error thrown.
     *
     * @param position the index of the attachment to remove
     */
    removeAttachment(position: number): IMessageBuilder;

    /**
     * Sets the user who is updating this message.
     * This is required if you are modifying an existing message.
     *
     * @param user the updater
     */
    setUpdater(user: IUser): IMessageBuilder;

    /**
     * Gets the resulting message that has been built up to the point of calling it.
     * Note: modifying the returned value will have no effect.
     */
    getMessage(): IMessage;
}

/**
 * Interface for building out a room.
 * Please note, a room creator, name, and type must be set otherwise you will NOT
 * be able to successfully save the room object.
 */
export interface IRoomBuilder {
    /**
     * Sets the creator of the room.
     *
     * @param creator the user who created the room
     */
    setCreator(creator: IUser): IRoomBuilder;

    /**
     * Sets the name of this room, it must align to the rules of Rocket.Chat room
     * names otherwise there will be an error thrown.
     *
     * @param name the name of the room
     */
    setName(name: string): IRoomBuilder;

    /**
     * Sets the room's type.
     *
     * @param type the room type
     */
    setType(type: RoomType): IRoomBuilder;

    /**
     * Sets whether this room should be a default room or not.
     * This means that new users will automatically join this room
     * when they join the server.
     *
     * @param isDefault room should be default or not
     */
    setDefault(isDefault: boolean): IRoomBuilder;

    /**
     * Adds a user to the room, these are by username until further notice.
     *
     * @param username the user's username to add to the room
     */
    addUsername(username: string): IRoomBuilder;

    /**
     * Sets the usernames of who are joined to the room.
     *
     * @param users the list of usernames
     */
    setUsers(users: Array<string>): IRoomBuilder;

    /**
     * Gets the resulting room that has been built up to the point of calling this method.
     * Note: modifying the returned value will have no effect.
     */
    getRoom(): IRoom;
}
