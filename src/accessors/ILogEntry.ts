import { LogMessageSeverity } from './LogMessageSeverity';

/**
 * Message which will be passed to a UI (either in a log or in the application's UI)
 */
export interface ILogEntry {
    severity: LogMessageSeverity;
    timestamp: Date;
    args: Array<any>;
}
