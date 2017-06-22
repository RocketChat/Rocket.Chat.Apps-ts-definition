import { IIteratorResult } from './IIteratorResult';

export interface IIterator<T> {
    next(skip: number): IIteratorResult<T>;
    [Symbol.iterator](): IIterator<T>;
}
