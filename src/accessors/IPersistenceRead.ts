/**
 * An instance of this interface will be constructed by the Rocketlet Manager
 * which allows the Rocketlet to access its own (generic) persistence.
 * In order to provide  high-performance access, the associated Rocket.Chat
 * model provided in `Rocketlet.getRocketChatAssociation()` is considered when
 * creating the persistence-accessor
 */
export interface IPersistenceRead {
    /**
     * Retrieves the persisted Rocketlet data
     * @param id The Rocketlet data's ID (from create)
     * @return The Rocketlets' very own data
     */
    read(id: string): object;

    /**
     * Retrieves the persisted Rocketlet data
     * @param referenceId The ID of the associated model's instance
     * @return The Rocketlets' very own data
     */
    readByReference(referenceId: string): object;
}
