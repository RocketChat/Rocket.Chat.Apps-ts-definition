/**
 * This accessor provides methods for accessing
 * settings in a read-only-fashion.
 */

import { ISetting } from '../settings/index';

export interface ISettingRead {
    getById(id: string): ISetting;
}
