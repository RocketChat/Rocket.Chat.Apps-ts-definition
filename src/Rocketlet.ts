import { IConfigurationExtend } from './accessors';
import { IEnvironmentRead } from './accessors/IEnvironmentRead';
import { IRocketletAuthorInfo } from './metadata/IRocketletAuthorInfo';
import { IRocketletInfo } from './metadata/IRocketletInfo';

export abstract class Rocketlet {
    /**
     * Create a new Rocketlet, this is called whenever the server starts up and initiates the Rocketlets.
     * Note, your implementation of this class should call `super(name, id, version)` so we have it.
     * Also, please use the `initialize()` method to do items instead of the constructor as the constructor
     * *might* be called more than once but the `initialize()` will only be called once.
     */
    protected constructor(private readonly info: IRocketletInfo) {
        console.log(`Constructed the Rocketlet ${this.info.name} (${this.info.id})`,
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
     * Get the ID of this Rocketlet, please see <link> for how to obtain an ID for your Rocketlet.
     *
     * @return {number} the ID
     */
    public getID(): number {
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
     * This method defines in which relationship to Rocket.Chat this Rocketlet lives.
     * This information is consumed within the visualization (e. g. for each associated entity,
     * a different set of visualization options is applicable) and in the persistence.
     *
     * @return The entity referred to and the cardinality of this association (e. g. can a room
     * extended by this Rocketlet have one or multiple Rocketlet data items?
     *
     */
    // TODO: Discuss what the purpose of this is, commenting out for now.
    // public abstract getRocketChatAssociation(): IRocketChatAssociation;

    /**
     * Method which will be called when the Rocketlet is initialized and will only be called once
     * in the lifetime of one instance of this Rocketlet.
     *
     * @return boolean stating whether the Rocketlet should be marked as active or not.
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
    // TODO: Config modify. This should actually be an implementation of configModify
    //        which ensures that only own configurations are being modified
    public onEnable(environment: IEnvironmentRead, configurationModify: object): boolean {
        return true;
    }

    /**
     * Method which is called when this Rocketlet is disabled and it can be called several times.
     * If this Rocketlet was enabled and then the user disabled it, this method will be called.
     * Please note, if an error is thrown this Rocketlet will be disabled forever until it is updated.
     */
    // TODO: Config modify. This should actually be an implementation of configModify
    //        which ensures that only own configurations are being modified
    public onDisable(configurationModify: object): void {
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
