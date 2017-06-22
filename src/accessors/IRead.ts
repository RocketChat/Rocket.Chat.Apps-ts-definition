import { IEnvironmentRead } from './IEnvironmentRead';
import { IMessageRead } from './IMessageRead';
import { IRoomRead } from './IRoomRead';
import { IUserRead } from './IUserRead';

/**
 * The RocketChatRead accessor provides methods for accessing the
 * Rocketlet's environment in a read-only-fashion.
 * It is safe to be injected in multiple places, idempotent and extensible
 */
export interface IRead {
    environment(): IEnvironmentRead;

    messages(): IMessageRead;

    rooms(): IRoomRead;

    users(): IUserRead;
}
