import { IIteratorResult } from './IIteratorResult';

/**
 * An iterator interface which implements:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol
 */
export interface IIterator<T> {
    next(): IIteratorResult<T>;
    [Symbol.iterator](): IIterator<T>;

    hasMore(): boolean;
}
