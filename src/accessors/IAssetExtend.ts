import { IAsset } from '../assets';

export interface IAssetExtend {
    register(asset: IAsset): void;
}
