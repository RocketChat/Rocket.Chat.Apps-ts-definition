import { ILogMessageSeverity } from './LogMessageSeverity';
/**
 * Message which will be passed to a UI (either in a log or in the application's UI)
 */
export interface ILogMessage {
    severity: ILogMessageSeverity;
    text: string;
    i18n: object; //todo: I believe the format of the language objects has to be defined anyway
}
