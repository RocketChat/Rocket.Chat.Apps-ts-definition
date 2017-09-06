import { IHttpExtend } from './IHttp';
import { ISettingsExtend } from './ISettingsExtend';
import { ISlashCommandsExtend } from './ISlashCommandsExtend';

/**
 * This accessor provides methods for declaring the configuration
 * of your Rocketlet. It is provided during initialization of your Rocketlet
 */
export interface IConfigurationExtend {
    /** Accessor for customing the handling of IHttp requests and responses your Rocketlet causes. */
    readonly http: IHttpExtend;

    /** Accessor for declaring the settings your Rocketlet provides. */
    readonly settings: ISettingsExtend;

    /** Accessor for declaring the commands which your Rocketlet provides. */
    readonly slashCommands: ISlashCommandsExtend;
}
