export interface IIterator<T> {
    next(packageSize?: number): Array<T>;
    [Symbol.iterator](): IIterator<T>;

    hasMoreElements(): boolean;
}
