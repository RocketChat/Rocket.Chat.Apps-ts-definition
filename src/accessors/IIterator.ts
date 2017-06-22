/**
 * Created by oliverjaegle on 22.06.17.
 */

export interface IIterator<T> {
    next(): Array<T>;

    hasMoreElements(): boolean;
}
