import { IRocketletAuthorInfo } from './IRocketletAuthorInfo';

export interface IRocketletInfo {
    id: string;
    name: string;
    nameSlug: string;
    version: string;
    description: string;
    requiredApiVersion: string;
    author: IRocketletAuthorInfo;
    classFile: string;
    iconFile: string;
    /** Base64 string of the Rocketlet's icon. */
    iconFileContent?: string;
}
