import { IMessage, IMessageAttachment } from '../messages';
import { IRoom, RoomType } from '../rooms';
import { IUser } from '../users';

export interface IModify {
    update(): IModifyUpdate;

    extend(): IModifyExtend;
}

export interface IModifyUpdate {
    /**
     * Modifies an existing room.
     * Raises an exception if a non-existent roomId is supplied
     * @param roomId the id of the existing room to modify and build
     * @param updater the user who is updating the room
     */
    room(roomId: string, updater: IUser): IRoomBuilder;

    /**
     * Modifies an existing message.
     * Raises an exception if a non-existent messageId is supplied
     * @param messageId the id of the existing message to modfiy and build
     * @param updater the user who is updating the message
     */
    message(messageId: string, updater: IUser): IMessageBuilder;

    // user(): IUpdateUser;
}

export interface IModifyExtend {
    /**
     * Builds a new room to continue building on.
     */
    createRoom(): IRoomBuilder;

    /**
     * Modifies a room in a non-destructive way: Properties can be added to it,
     * but existing properties cannot be changed
     * @param roomId The technical id of the room to be extended
     */
    extendRoom(roomId: string): IRoomExtend;

    createMessage(): IMessageBuilder;

    /**
     * Modifies a message in a non-destructive way: Properties can be added to it,
     * but existing properties cannot be changed
     * @param messageId The technical id of the Message to be extended
     */
    extendMessage(messageId: string): IMessageExtend;

    // user(): IExtendUser;
}

export interface IRoomExtend {
    addProperty(name: string, value: object);

    addMember(user: IUser);

    /**
     * A specialization of addProperty: Add metadata enabling interaction with the plugin
     * @param metadata
     */
    addPluginMetadata(metadata: object);
}

export interface IMessageExtend {
    addProperty(name: string, value: object);

    addAttachments(attachments: Array<IMessageAttachment>);

    /**
     * A specialization of addProperty: Add metadata enabling interaction with the plugin
     * @param metadata
     */
    addPluginMetadata(metadata: object);
}

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

    /**
     * Finishes the building and will send/update the message, unless told otherwise.
     * Please note, that a room and sender must be associated otherwise this
     * will fail and throw an error.
     *
     * @param preventSending (optional) only build the message and don't send/update it
     */
    finish(preventSending?: boolean): IMessage;
}

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

    /**
     * Finishes the building and will create/update the room, unless told otherwise.
     * Please note, a room creator, name, and type must be set otherwise this
     * will fail and throw an error.
     *
     * @param preventSaving (optional) only build the room and don't save/update it
     */
    finish(preventSaving?: boolean): IRoom;
}