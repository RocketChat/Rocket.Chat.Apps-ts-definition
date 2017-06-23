import { RocketChatAssociationModel } from './RocketChatAssociationModel';
import { RocketChatAssociationMultiplicity } from './RocketChatAssociationMultiplicity';

/**
 * Defines how the Rocketlet refers to the RocketChat
 */
export interface IRocketChatAssociation {
    model: RocketChatAssociationModel;
    multiplicity: RocketChatAssociationMultiplicity;
}
