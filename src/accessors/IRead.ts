import { IEnvironmentRead } from './IEnvironmentRead';
import { IMessageRead } from './IMessageRead';
import { IRoomRead } from './IRoomRead';
import { IServerSettingRead } from './IServerSettingRead';
import { IUserRead } from './IUserRead';

/**
 * The IRead accessor provides methods for accessing the
 * Rocket.Chat's environment in a read-only-fashion.
 * It is safe to be injected in multiple places, idempotent and extensible
 */
export interface IRead {
    /** Gets the IEnvironmentRead instance. */
    getEnvironmentReader(): IEnvironmentRead;

    /** Gets the IMessageRead instance. */
    getMessageReader(): IMessageRead;

    /** Gets the IServerSettingRead instance. */
    getServerSettingReader(): IServerSettingRead;

    /** Gets the IRoomRead instance. */
    getRoomReader(): IRoomRead;

    /** Gets the IUserRead instance. */
    getUserReader(): IUserRead;
}
