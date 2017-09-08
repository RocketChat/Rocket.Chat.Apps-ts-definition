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
    /** Whether this setting is a public setting or not - administrators can see ones which are not public but users can't. */
    public: boolean;
    /** Whether this setting should be hidden from the user/administrator's eyes (can't be hidden and required). */
    hidden?: boolean;
    /** The selectable values when the setting's type is "select". */
    values?: Array<ISettingSelectValue>;
    /** The name of the section where to put this setting under. */
    section?: string;
    /** Name of the setting in the form of a i18n string. */
    i18nLabel: string;
    /** Description of the setting in the form of a i18n string. */
    i18nDescription?: string;
    /** Date in which this setting was created. */
    createdAt?: Date;
    /** The last time the setting was updated at. */
    updatedAt?: Date;
}

export interface ISettingSelectValue {
    key: string;
    i18nLabel: string;
}
