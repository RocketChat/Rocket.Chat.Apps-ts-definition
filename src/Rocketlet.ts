import { IConfigurationExtend } from './accessors';
import { IConfigurationModify, IEnvironmentRead, ILogger } from './accessors';
import { IRocketlet } from './IRocketlet';
import { IRocketletAuthorInfo } from './metadata/IRocketletAuthorInfo';
import { IRocketletInfo } from './metadata/IRocketletInfo';

export abstract class Rocketlet implements IRocketlet {
    /**
     * Create a new Rocketlet, this is called whenever the server starts up and initiates the Rocketlets.
     * Note, your implementation of this class should call `super(info, logger)` so we have it.
     * Use the `initialize()` method to register configuration items instead of in the constructor.
     */
    protected constructor(private readonly info: IRocketletInfo, private readonly logger: ILogger) {
        this.logger.debug(`Constructed the Rocketlet ${this.info.name} (${this.info.id})`,
            `v${this.info.version} which depends on the API v${this.info.requiredApiVersion}!`,
            `Created by ${this.info.author.name}`);
    }

    /**
     * Get the name of this Rocketlet.
     *
     * @return {string} the name
     */
    public getName(): string {
        return this.info.name;
    }

    /**
     * Gets the sluggified name of this Rocketlet.
     *
     * @return {string} the name slugged
     */
    public getNameSlug(): string {
        return this.info.nameSlug;
    }

    /**
     * Get the ID of this Rocketlet, please see <link> for how to obtain an ID for your Rocketlet.
     *
     * @return {number} the ID
     */
    public getID(): string {
        return this.info.id;
    }

    /**
     * Get the version of this Rocketlet, using http://semver.org/.
     *
     * @return {string} the version
     */
    public getVersion(): string {
        return this.info.version;
    }

    /**
     * Get the description of this Rocketlet, mostly used to show to the clients/administrators.
     *
     * @return {string} the description
     */
    public getDescription(): string {
        return this.info.description;
    }

    /**
     * Gets the API Version which this Rocketlet depends on (http://semver.org/).
     * This property is used for the dependency injections.
     *
     * @return {string} the required api version
     */
    public getRequiredApiVersion(): string {
        return this.info.requiredApiVersion;
    }

    /**
     * Gets the information regarding the author/maintainer of this Rocketlet.
     *
     * @return author information
     */
    public getAuthorInfo(): IRocketletAuthorInfo {
        return this.info.author;
    }

    /**
     * Gets the entirity of the Rocketlet's information.
     *
     * @return Rocketlet information
     */
    public getInfo(): IRocketletInfo {
        return this.info;
    }

    /**
     * Gets the ILogger instance for this Rocketlet.
     *
     * @return the logger instance
     */
    public getLogger(): ILogger {
        return this.logger;
    }

    /**
     * Method which will be called when the Rocketlet is initialized. This is the recommended place
     * to add settings and slash commands. If an error is thrown, everything which has been provided
     * will be unregistered/removed and the Rocketlet will be disabled.
     */
    public initialize(configurationExtend: IConfigurationExtend): void {
        this.extendConfiguration(configurationExtend);
    }

    /**
     * Method which is called when this Rocketlet is enabled and can be called several
     * times during this instance's life time. Once after the `ititialize()` is called,
     * pending it doesn't throw an error, and then anytime the Rocketlet is enabled by the user.
     * If this method, `onEnable()`, returns false, then this Rocketlet will not
     * actually be enabled (ex: a setting isn't configured).
     *
     * @return whether the Rocketlet should be enabled or not
     */
    public onEnable(environment: IEnvironmentRead, configurationModify: IConfigurationModify): boolean {
        return true;
    }

    /**
     * Method which is called when this Rocketlet is disabled and it can be called several times.
     * If this Rocketlet was enabled and then the user disabled it, this method will be called.
     * Please note, if an error is thrown this Rocketlet will be disabled forever until it is updated.
     */
    public onDisable(configurationModify: IConfigurationModify): void {
        return;
    }

    /**
     * Method will be called during initialization. It allows for adding custom configuration options and defaults
     * @param configuration
     */
    protected extendConfiguration(configuration: IConfigurationExtend): void {
        return;
    }
}
