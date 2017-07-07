import { IRoom } from '../rooms';
import { IUser } from '../users';

/**
 * Represents  the slash command's context when a user
 * executes a slash command.
 */
export interface ISlashCommandContext {
    /** The user who sent the command. */
    getSender(): IUser;

    /** The room where the command was sent in. */
    getRoom(): IRoom;

    /** The arguments passed into the command. */
    getArguments(): Array<string>;
}
