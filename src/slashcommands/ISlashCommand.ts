import { IHttp, IRead, ISettingRead } from '../accessors';

/**
 * Represents a slash command that is being provided.
 */
export interface ISlashCommand {
    command: string;
    paramsExample: string;
    i18nDescription: string;
    executor(args: Array<string>, settings: ISettingRead, read: IRead, http: IHttp): void;
}
