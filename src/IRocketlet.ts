import { IConfigurationExtend } from './accessors/IConfigurationExtend';
import { IConfigurationModify } from './accessors/IConfigurationModify';
import { IEnvironmentRead } from './accessors/IEnvironmentRead';
import { ILogger } from './accessors/ILogger';
import { IRocketletAuthorInfo } from './metadata/IRocketletAuthorInfo';
import { IRocketletInfo } from './metadata/IRocketletInfo';

export interface IRocketlet {
    /**
     * Get the name of this Rocketlet.
     *
     * @return {string} the name
     */
    getName(): string;

    /**
     * Gets the sluggified name of this Rocketlet.
     *
     * @return {string} the name slugged
     */
    getNameSlug(): string;

    /**
     * Get the ID of this Rocketlet, please see <link> for how to obtain an ID for your Rocketlet.
     *
     * @return {number} the ID
     */
    getID(): string;

    /**
     * Get the version of this Rocketlet, using http://semver.org/.
     *
     * @return {string} the version
     */
    getVersion(): string;

    /**
     * Get the description of this Rocketlet, mostly used to show to the clients/administrators.
     *
     * @return {string} the description
     */
    getDescription(): string;

    /**
     * Gets the API Version which this Rocketlet depends on (http://semver.org/).
     * This property is used for the dependency injections.
     *
     * @return {string} the required api version
     */
    getRequiredApiVersion(): string;

    /**
     * Gets the information regarding the author/maintainer of this Rocketlet.
     *
     * @return author information
     */
    getAuthorInfo(): IRocketletAuthorInfo;

    /**
     * Gets the entirity of the Rocketlet's information.
     *
     * @return Rocketlet information
     */
    getInfo(): IRocketletInfo;

    /**
     * Gets the ILogger instance for this Rocketlet.
     *
     * @return the logger instance
     */
    getLogger(): ILogger;

    /**
     * Method which will be called when the Rocketlet is initialized and will only be called once
     * in the lifetime of one instance of this Rocketlet.
     */
    initialize(configurationExtend: IConfigurationExtend): void;

    /**
     * Method which is called when this Rocketlet is enabled and can be called several
     * times during this instance's life time. Once after the `ititialize()` is called,
     * pending it doesn't throw an error, and then anytime the Rocketlet is enabled by the user.
     * If this method, `onEnable()`, returns false, then this Rocketlet will not
     * actually be enabled (ex: a setting isn't configured).
     *
     * @return whether the Rocketlet should be enabled or not
     */
    onEnable(environment: IEnvironmentRead, configurationModify: IConfigurationModify): boolean;

    /**
     * Method which is called when this Rocketlet is disabled and it can be called several times.
     * If this Rocketlet was enabled and then the user disabled it, this method will be called.
     * Please note, if an error is thrown this Rocketlet will be disabled forever until it is updated.
     */
    onDisable(configurationModify: IConfigurationModify): void;
}
