import { IHttp, IModify, IPersistence, IRead } from '../accessors';
import { SlashCommandContext } from './SlashCommandContext';

/**
 * Represents a slash command that is being provided.
 */
export interface ISlashCommand {
    /** The value which determines what the user types. */
    command: string;
    /** Example of the parameters or an i18n string. */
    paramsExample: string;
    /** i18n string for the description of the command. */
    i18nDescription: string;
    /** Optional. Permission value required for the user to have to see/use it. */
    permission?: string;
    /** The function which gets called when a user enters the command. */
    executor(context: SlashCommandContext, read: IRead, modify: IModify, http: IHttp, persis: IPersistence): void;
}
