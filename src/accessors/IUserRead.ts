/**
 * This accessor provides methods for accessing
 * users in a read-only-fashion.
 */

import { IUser } from '../users/index';

export interface IUserRead {
    getById(id: string): IUser;

    getByUsername(username: string): IUser;

}
