import { SettingType } from './SettingType';

export interface ISetting {
    /** The id of this setting. */
    id: string;
    /** Type of setting this is. */
    type: SettingType;
    /** What is the default value (allows a reset button). */
    packageValue: any;
    /** Will be the value of this setting, set it to something by default. */
    value: any;
    group?: string;
    hidden?: boolean;
    i18nLabel?: string;
    i18nDescription?: string;
    updatedAt?: Date;
    createdAt?: Date;
}
