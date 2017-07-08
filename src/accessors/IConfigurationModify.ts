import { ISettingsModify } from './ISettingsModify';
import { ISlashCommandsModify } from './ISlashCommandsModify';

export interface IConfigurationModify {
    readonly settings: ISettingsModify;

    readonly slashCommands: ISlashCommandsModify;
}
