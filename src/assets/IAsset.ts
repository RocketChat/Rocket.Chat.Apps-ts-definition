/**
 * Defines assets which are referenced by other
 * items within your Rocketlet. This is to ensure
 * that the asset exists when other items are
 * being registered. You can also define an asset
 * should you want to restrict it's access to
 * people who are not logged in.
 */
export interface IAsset {
    /**
     * The location of this asset inside of the Rocketlet package.
     * It is a relative location from the root of the Rocketlet's
     * package.
     */
    path: string;

    /** Whether this asset can be accessed when a request to it is not authenicated. */
    public: boolean;
}
