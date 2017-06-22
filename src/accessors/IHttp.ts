/**
 *
 * there should actually already exist such an interface in some library.
 * I would actually wrap it in order to have an implementation adding more comfort, such as adding a response header
 */
export interface IHttp {
    get(): boolean;

    put(): boolean;
}
