import { RocketChatAssociationModel } from '../metadata/RocketChatAssociationModel';
import { IRelatedPersistence } from './IRelatedPersistence';
/**
 * Provides access to the database
 */

export interface IPersistence {

    relatedTo(model: RocketChatAssociationModel): IRelatedPersistence;
}
