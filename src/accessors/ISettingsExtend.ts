import { ISetting } from '../settings/index';

/**
 * This accessor provides methods for adding custom settings,
 * which are displayed on your Rocketlet's page.
 * This is provided on initialization of your Rocketlet.
 */
export interface ISettingsExtend {
    /**
     * Adds a setting which can be configured by an administrator.
     * Settings can only be added to groups which have been provided by this Rocketlet earlier
     * and if a group is not provided, the setting will appear outside of a group.
     *
     * @param setting the setting
     */
    provideSetting(setting: ISetting): void;
}
