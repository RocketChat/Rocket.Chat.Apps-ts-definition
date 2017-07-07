import { ISettingsModify } from './ISettingsModify';
import { ISlashCommandsModify } from './ISlashCommandsModify';

export interface IConfigurationModify {
    settings: ISettingsModify;

    slashCommands: ISlashCommandsModify;
}
