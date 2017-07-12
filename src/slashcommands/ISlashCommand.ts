import { IHttp, IModify, IRead } from '../accessors';
import { ISlashCommandContext } from './ISlashCommandContext';

/**
 * Represents a slash command that is being provided.
 */
export interface ISlashCommand {
    command: string;
    paramsExample: string;
    i18nDescription: string;
    executor(context: ISlashCommandContext, read: IRead, modify: IModify, http: IHttp): void;
}
