import { IPersistenceRead } from './IPersistenceRead';
/**
 * An instance of this interface will be constructed by the Rocketlet Manager
 * which allows the Rocketlet to access its own (generic) persistence.
 * In order to provide  high-performance access, the associated Rocket.Chat
 * model provided in `Rocketlet.getRocketChatAssociation()` is considered when
 * creating the persistence-accessor
 */
export interface IPersistence extends IPersistenceRead{
    /**
     * Adds a new record representing the state of the Rocketlet
     * @param referenceId The ID of the instance of the associated model
     * @param data The Rocketlets' very own data
     *
     * @return An ID of the Rocketlet data
     */
    create(referenceId: string, data: object): string;

    /**
     * Updates
     * @param id The Rocketlet data's ID (from create)
     */
    update(id: string, data: object): void; // todo: might be better off with IExecutionResult returned

    remove(id: string);

    removeByReference(referenceId: string);
}
