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
}
