import { IAssetExtend } from './IAssetExtend';
import { IContextualBarButtonsExtend } from './IContextualBarButtonsExtend';
import { ISettingsExtend } from './ISettingsExtend';
import { ISlashCommandsExtend } from './ISlashCommandsExtend';

/**
 * This accessor provides methods for declaring the configuration
 * of your Rocketlet. It is provided during initialization of your Rocketlet
 */
export interface IConfigurationExtend {
    /** Accessor for registering the assets which need to be. */
    readonly assets: IAssetExtend;

    /** Accessor for declaring the contextual bar buttons your Rocketlet provides. */
    readonly contextualBarButtons: IContextualBarButtonsExtend;

    /** Accessor for declaring the settings your Rocketlet provides. */
    readonly settings: ISettingsExtend;

    /** Accessor for declaring the commands which your Rocketlet provides. */
    readonly slashCommands: ISlashCommandsExtend;
}
