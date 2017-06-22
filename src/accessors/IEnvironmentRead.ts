import { ISettingRead } from './ISettingRead';
/**
 * Allows read-access to configuration and other data which is not created by the normal user
 */

export interface IEnvironmentRead{
    settings(): ISettingRead;

    environmentVariables(): object; //todo
}
