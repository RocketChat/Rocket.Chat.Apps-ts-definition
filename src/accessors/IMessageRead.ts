/**
 * The RocketChatRead accessor provides methods for accessing
 * users in a read-only-fashion.
 */

import { IUser } from '../users/index';

export interface IUserRead {
    getUserById(id: string): IUser;

    getUserByUsername(username: string): IUser;

}
