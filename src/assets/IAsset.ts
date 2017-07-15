/**
 * Defines assets which are referenced by other
 * items within your Rocketlet. This is to ensure
 * that the asset exists when other items are
 * being registered.
 */
export interface IAsset {
    /** The location of this asset inside of the Rocketlet package. */
    path: string;

    /** Whether this asset can be accessed when a request is not authenicated. */
    public: boolean;
}
