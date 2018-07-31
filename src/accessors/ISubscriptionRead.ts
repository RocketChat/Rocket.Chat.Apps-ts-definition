import { ISubscription } from '../subscriptions/ISubscription';

/**
 * This accessor provides methods for accessing
 * subscriptions in a read-only-fashion.
 */
export interface ISubscriptionRead {
    /**
     * Gets a subscription by a room id.
     *
     * @param roomId the id of the room
     * @returns the subscription
     */
    getByRoomId(roomId: string): Promise<ISubscription | undefined>;
}
