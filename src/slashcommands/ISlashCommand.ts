import { IBuilder, IHttp, IRead } from '../accessors';
import { SlashCommandContext } from './SlashCommandContext';

/**
 * Represents a slash command that is being provided.
 */
export interface ISlashCommand {
    command: string;
    paramsExample: string;
    i18nDescription: string;
    executor(context: SlashCommandContext, builder: IBuilder, read: IRead, http: IHttp): void;
}
