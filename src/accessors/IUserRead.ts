import { IUser } from '../users/index';

/**
 * This accessor provides methods for accessing
 * users in a read-only-fashion.
 */
export interface IUserRead {
    getById(id: string): IUser;

    getByUsername(username: string): IUser;
}
