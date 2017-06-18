import { priorityMonitor, priorityNormal } from './decorators/priority';
import { IMessage } from './interfaces/messages';
import { IRoom } from './interfaces/rooms';
import { ISetting } from './interfaces/settings';
import { IUser } from './interfaces/users';
import { IRequest, IResponse, RequestMethod, ResponseStatus } from './interfaces/webhooks';

export class BaseRocketlet {
    /**
     * Create a new Rocketlet, this is called whenever the server starts up and initiates the Rocketlets.
     * Note, your implementation of this class should call `super(name, id, version)` so we have it.
     */
    constructor(public name: string, public id: number, public version: string, public description: string) {
        console.log(`Constructed the Rocketlet ${this.name} (${this.id}) v${this.version}!`);
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
     * Gets the description of this Rocketlet, use this to describe what your Rocketlet does to the users.
     *
     * @return {string} the Rocketlet's description
     */
    public getDescription(): string {
        return this.description;
    }

    /**
     * The Rocketlet should return an array of settings which it
     * provies to the user to allow them to configure anything.
     *
     * @return {array} the settings this Rocketlet provides
     */
    public getSettings(): Array<ISetting> {
        return new Array<ISetting>();
    }

    /**
     * Gets the setting from the persistant storage,
     * this will be provided to the Rocketlets and you don't have to implement it.
     *
     * @param id the id of the setting to retrieve
     * @return the setting or undefined if it doesn't exist
     */
    public getSetting(id: string): ISetting {
        return undefined;
    }

    /**
     * Gets the value of the setting from the persistant storage,
     * this will be provided to the Rocketlets and you don't have to implement it.
     *
     * @param id the id of the setting to get the value for
     * @return the value of the setting if it is defined, will be undefined if it doesn't exist
     */
    public getSettingValue(id: string): any {
        return undefined;
    }

    /**
     * Method called when before the message is sent to other clients.
     * Return the message object with your changes to it.
     *
     * @param room The room where the message is being sent to
     * @param user The user who is sending the message
     * @param message The message which is being sent
     */
    @priorityNormal
    public pre_messageSent(room: IRoom, user: IUser, message: IMessage): IMessage {
        // Handle data before the message is saved to the database
        return message;
    }

    /**
     * Method called *after* the message is sent to the other clients.
     *
     * @param room The room where the message was sent to
     * @param user The user who sent the message
     * @param message The message which was sent
     */
    @priorityMonitor
    public post_messageSent(room: IRoom, user: IUser, message: IMessage): void {
        // Handle data *after* the message is saved to the database
    }

    /**
     * Called whenever the publically accessible url for this Rocketlet is called,
     * if you handle the methods differently then split it out so your code doesn't get too big.
     *
     * @param method the method this was called with (GET, POST, etc)
     * @param request the actual request made
     * @return the response to send to the client
     */
    public webhook_event(method: RequestMethod, request: IRequest): IResponse {
        return {
            status: ResponseStatus.UNIMPLEMENTED,
        };
    }
}
