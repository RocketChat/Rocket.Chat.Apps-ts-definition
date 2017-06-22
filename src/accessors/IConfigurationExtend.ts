import { ISetting } from '../settings/index';

/**
 * This accessor provides methods for accessing
 * settings in a read-only-fashion.
 */
export interface ISettingRead {
    getById(id: string): ISetting;

    getValueById(id: string): any;
}
