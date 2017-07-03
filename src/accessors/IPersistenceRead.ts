import { RocketChatAssociationModel } from '../metadata/RocketChatAssociationModel';
import { IRelatedPersistenceRead } from './IRelatedPersistenceRead';
/**
 * Provides access to the database
 */

export interface IPersistenceRead {

    relatedTo(model: RocketChatAssociationModel): IRelatedPersistenceRead;
}
