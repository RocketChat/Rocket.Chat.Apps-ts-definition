import { RoomType } from '../rooms/RoomType';

export interface IContextBarButton {
    /** A unique identifier for your button.  */
    id: string;

    /** The i18n title for your button. */
    i18nTitle: string;

    /**
     * The icon class for your button.
     * See: https://github.com/RocketChat/Rocket.Chat/blob/develop/packages/rocketchat-theme/client/vendor/fontello/css/fontello.css
     */
    icon: string;

    /** The position your button should show up. */
    order: number;

    /** The types of rooms which this button should be assigned to. */
    assignedTo: Array<RoomType>; // TODO: Determine if this would be too expensive as a function

    /** The path to the asset which is responsible for the display of this context area shown for this button. */
    assetPath: string;
}
