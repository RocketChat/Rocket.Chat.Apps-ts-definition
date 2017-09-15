import { RocketChatAssociationRecord } from '../metadata';

/**
 * Provides an accessor write data to the Rocketlet's persistent storage.
 * A Rocketlet only has access to its own persistent storage and does not
 * have access to any other Rocketlet's.
 */
export interface IPersistence {
    /**
     * Creates a new record in the Rocketlet's persistent storage, returning the resulting "id".
     *
     * @param data the actual data to store, must be an object otherwise it will error out.
     * @return the resulting record's id
     */
    create(data: object): string;

    /**
     * Creates a new record in the Rocketlet's persistent storage with the associated information
     * being provided.
     *
     * @param data the actual data to store, must be an object otherwise it will error out
     * @param association the association data which includes the model and record id
     * @return the resulting record's id
     */
    createWithAssociation(data: object, association: RocketChatAssociationRecord): string;

    /**
     * Creates a new record in the Rocketlet's persistent storage with the data being
     * associated with more than one Rocket.Chat record.
     *
     * @param data the actual data to store, must be an object otherwise it will error out
     * @param associations an array of association data which includes the model and record id
     * @return the resulting record's id
     */
    createWithAssociations(data: object, associations: Array<RocketChatAssociationRecord>): string;

    /**
     * Updates an existing record with the data provided in the Rocketlet's persistent storage.
     * This will throw an error if the record doesn't currently exist or if the data is not an object.
     *
     * @param id the data record's id
     * @param data the actual data to store, must be an object otherwise it will error out
     * @param upsert whether a record should be created if the id to be updated does not exist
     * @return the id of the updated/upserted record
     */
    update(id: string, data: object, upsert?: boolean): string;

    /**
     * Removes a record by the provided id and returns the removed record.
     *
     * @param id of the record to remove
     * @return the data record which was removed
     */
    remove(id: string): object;

    /**
     * Removes all of the records in persistent storage which are associated with the provided information.
     *
     * @param association the information about the association for the records to be removed
     * @return the removed records
     */
    removeByAssociation(association: RocketChatAssociationRecord): Array<object>;

    /**
     * Removes all of the records in persistent storage which are associated with the provided information.
     * More than one association acts like an AND which means a record in persistent storage must have all
     * of the associations to be considered a match.
     *
     * @param associations the information about the associations for the records to be removed
     * @return the removed records
     */
    removeByAssociations(associations: Array<RocketChatAssociationRecord>): Array<object>;
}
