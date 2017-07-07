import { IBuilder, IHttp, IRead, ISettingRead } from '../accessors';
import { ISlashCommandContext } from './ISlashCommandContext';

/**
 * Represents a slash command that is being provided.
 */
export interface ISlashCommand {
    command: string;
    paramsExample: string;
    i18nDescription: string;
    executor(context: ISlashCommandContext, builder: IBuilder, settings: ISettingRead, read: IRead, http: IHttp): void;
}
