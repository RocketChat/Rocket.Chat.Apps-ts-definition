import { ISetting } from '../settings/index';

/**
 * This accessor provides methods to change default setting options
 * of Rocket.Chat in a compatible way. Use it during initialization of your Rocketlet
 */
export interface ISettingsModify {

    /**
     * Hides an existing settings group.
     *
     * @param name The technical name of the group
     */
    hideGroup(name: string): void;

    /**
     * Hides a setting. This does not influence the actual functionality (the setting will still
     * have its value and can be programatically read), but the administrator will not be able to see it anymore
     *
     * @param id the id of the setting to hide
     */
    hideSetting(id: string): void;

    /**
     * Modifies the configured value of another setting.
     * Use it with caution
     *
     * @param setting
     */
    modifySetting(setting: ISetting): void;
}
