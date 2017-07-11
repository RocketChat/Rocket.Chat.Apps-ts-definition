import { IEnvironmentRead } from './IEnvironmentRead';
import { IMessageRead } from './IMessageRead';
import { IRoomRead } from './IRoomRead';
import { IUserRead } from './IUserRead';

/**
 * The IRead accessor provides methods for accessing the
 * Rocket.Chat's environment in a read-only-fashion.
 * It is safe to be injected in multiple places, idempotent and extensible
 */
export interface IRead {
    /** Gets the IEnvironmentRead instance, contains settings and environmental variables. */
    getEnvironmentReader(): IEnvironmentRead;

    /** Gets the IMessageRead instance. */
    getMessageReader(): IMessageRead;

    /** Gets the IRoomRead instance. */
    getRoomReader(): IRoomRead;

    /** Gets the IUserRead instance. */
    getUserReader(): IUserRead;
}
