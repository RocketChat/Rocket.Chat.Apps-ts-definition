export abstract class Rocketlet {
    /**
     * Create a new Rocketlet, this is called whenever the server starts up and initiates the Rocketlets.
     * Note, your implementation of this class should call `super(name, id, version)` so we have it.
     * Also, please use the `initialize()` method to do items instead of the constructor as the constructor
     * *might* be called more than once but the `initialize()` will only be called once.
     */
    protected constructor(
        private readonly name: string,
        private readonly id: number,
        private readonly version: string,
        private readonly description: string,
        private readonly requiredApiVersion: string) {
            console.log(`Constructed the Rocketlet ${this.name} (${this.id})
                v${this.version} which depends on the API v${requiredApiVersion}!`);
    }

    /**
     * Get the name of this Rocketlet.
     *
     * @return {string} the name
     */
    public getName(): string {
        return this.name;
    }

    /**
     * Get the version of this Rocketlet, using http://semver.org/.
     *
     * @return {string} the version
     */
    public getVersion(): string {
        return this.version;
    }

    /**
     * Get the ID of this Rocketlet, please see <link> for how to obtain an ID for your Rocketlet.
     *
     * @return {number} the ID
     */
    public getID(): number {
        return this.id;
    }

    /**
     * Gets the API Version which this Rocketlet depends on (http://semver.org/).
     * This property is used for the dependency injections.
     *
     * @return {string} the required api version
     */
    public getRequiredApiVersion(): string {
        return this.requiredApiVersion;
    }

    /**
     * Method which will be called when the Rocketlet is initialized and will only be called once
     * in the lifetime of one instance of this Rocketlet.
     *
     * @return boolean stating whether the Rocketlet should be marked as active or not.
     */
    public abstract initialize(): void;

    /**
     * Method which is called when this Rocketlet is enabled and can be called several
     * times during this instance's life time. Once after the `ititialize()` is called,
     * pending it doesn't throw an error, and then anytime the Rocketlet is enabled by the user.
     * If this method, `onEnable()`, returns false, then this Rocketlet will not
     * actually be enabled (ex: a setting isn't configured).
     *
     * @return whether the Rocketlet should be enabled or not
     */
    public abstract onEnable(): boolean;

    /**
     * Method which is called when this Rocketlet is disabled and it can be called several times.
     * If this Rocketlet was enabled and then the user disabled it, this method will be called.
     * Please note, if an error is thrown this Rocketlet will be disabled forever until it is updated.
     */
    public abstract onDisable(): void;
}
