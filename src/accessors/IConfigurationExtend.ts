import { ISettingsExtend } from './ISettingsExtend';
import { ISlashCommandsExtend } from './ISlashCommandsExtend';


/**
 * This accessor provides methods for enhancing all configuration aspects
 * of Rocket.Chat in a compatible way. Use it during initialization of your Rocketlet
 */

export interface IConfigurationExtend{

    settings(): ISettingsExtend;

    slashCommands(): ISlashCommandsExtend;
}
