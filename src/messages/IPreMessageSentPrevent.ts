import { IHttp, IRead } from '../accessors';
import { IMessage } from './IMessage';

/**
 * Handler which is called to determine whether a user is allowed to send a message or not.
 */
export interface IPreMessageSentPrevent {
    preMessageSentPreventCheck?(message: IMessage, read: IRead, http: IHttp): boolean;

    preMessageSentPreventExecute(message: IMessage, read: IRead, http: IHttp): boolean;
}
