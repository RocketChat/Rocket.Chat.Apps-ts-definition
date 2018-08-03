import { IRoomSubscription } from '../roomsubscriptions/IRoomSubscription';

/**
 * This accessor provides methods for accessing
 * room subscriptions in a read-only-fashion.
 */
export interface IRoomSubscriptionRead {
    /**
     * Gets a list of roomSubscriptions by a room id.
     *
     * @param roomId the id of the room
     * @returns an iterator of room subscriptions
     */
    getByRoomId(roomId: string): Promise<IterableIterator<IRoomSubscription>>;
}
