import { IRocketletAuthorInfo } from './IRocketletAuthorInfo';

export interface IRocketletInfo {
    id: number;
    name: string;
    version: string;
    description: string;
    requiredApiVersion: string;
    author: IRocketletAuthorInfo;
}
