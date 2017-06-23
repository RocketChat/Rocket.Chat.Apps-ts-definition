import { ILogMessage } from './ILogMessage';
/**
 * All executions of pre- and post-exits are enabled to perform the modifications
 * they aim at themselves. This interface provides a mechanism to propagate information
 * about whether this execution was actually successful
 */

export interface IExecutionResult {
    failed: boolean;
    logMessages: Array<ILogMessage>;
}
