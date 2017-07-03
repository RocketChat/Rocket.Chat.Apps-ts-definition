import { RocketChatAssociationModel } from '../metadata/RocketChatAssociationModel';
import { IRelatedPersistenceRead } from './IRelatedPersistenceRead';
/**
 * Provides access to the database
 */

export interface IPersistence {

    relatedTo(model: RocketChatAssociationModel): IRelatedPersistenceRead;
}
