import { SettingType } from './SettingType';

export interface ISetting {
    /** The id of this setting. */
    id: string;
    /** Type of setting this is. */
    type: SettingType;
    /** What is the default value (allows a reset button). */
    packageValue: any;
    /** Will be the value of this setting. Should nothing be set here the "packageValue" will be used. */
    value?: any;
    /** Whether this setting is required or not. */
    required: boolean;
    /** The name of the group where to put this setting under. */
    group?: string;
    /** Whether this setting should be hidden from the user/administrator's eyes (can't be hidden and required). */
    hidden?: boolean;
    /** Name of the setting in the form of a i18n string. */
    i18nLabel: string;
    /** Description of the setting in the form of a i18n string. */
    i18nDescription?: string;
    /** Date in which this setting was created. */
    createdAt?: Date;
    /** The last time the setting was updated at. */
    updatedAt?: Date;
}
