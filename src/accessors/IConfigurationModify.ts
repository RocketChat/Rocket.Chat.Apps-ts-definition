import { ISettingsModify } from './ISettingsModify';
import { ISlashCommandsModify } from './ISlashCommandsModify';

/**
 * This accessor provides methods for modifying the configuration
 * of Rocket.Chat. It is provided during "onEnable" of your Rocketlet.
 */
export interface IConfigurationModify {
    /** Accessor for modifying the settings inside of Rocket.Chat */
    readonly settings: ISettingsModify;

    readonly slashCommands: ISlashCommandsModify;
}
