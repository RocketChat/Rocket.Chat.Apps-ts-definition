import { ISetting } from '../settings/ISetting';

/**
 * Reader for the settings inside of the server (Rocket.Chat).
 * Only a subset of them are exposed to Rocketlets.
 */
export interface IServerSettingRead {
    /**
     * Gets a server setting by id.
     * Please note: a error will be thrown if not found
     * or trying to access one that isn't exposed.
     *
     * @param id the id of the setting to get
     * @return the setting
     */
    getOneById(id: string): ISetting;

    /**
     * Gets a server setting's value by id.
     * Please note: a error will be thrown if not found
     * or trying to access one that isn't exposed.
     *
     * @param id the id of the setting to get
     * @return the setting's value
     */
    getValueById(id: string): any;

    /**
     * Gets all of the server settings which are exposed
     * to the Rocketlets.
     *
     * @return array of the exposed settings
     */
    getAll(): Array<ISetting>;

    /**
     * Checks if the server setting for the id provided is readable,
     * will return true or false and won't throw an error.
     *
     * @param id the server setting id
     */
    isReadableById(id: string): boolean;
}
