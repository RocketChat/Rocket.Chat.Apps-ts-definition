import { ISetting } from '../settings/index';

/*
 * This accessor provides methods for adding custom settings
 * of Rocket.Chat in a compatible way. Use it during initialization of your Rocketlet
 */
export interface ISettingsExtend {

    /**
     * Adds a group into which settings can be added lateron
     * @param name The technical name of the group to be referred to in the settings
     */
    provideGroup(name: string, label: string): void;

    /**
     * Adds a setting  which can be configured by an administrator
     * Settings can only be added to groups which have been provided by this Rocketlet earlier
     * @param setting
     */
    provideSetting(setting: ISetting): void;
}
