import { IHttp, IPersistence, IRead } from '../accessors';
import { IMessage } from './IMessage';

/**
 * Handler which is called to determine whether a user is allowed to send a message or not.
 */
export interface IPreMessageSentPrevent {
    checkPreMessageSentPrevent?(message: IMessage, read: IRead, http: IHttp): boolean;

    executePreMessageSentPrevent(message: IMessage, read: IRead, http: IHttp, persistence: IPersistence): boolean;
}
