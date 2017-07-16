import { IContextualBarButton } from '../contextualbar';

/**
 * Interface to extend the context bar buttons. These buttons are
 * also known as "tab bar" however they are being called context
 * bar buttons because of what they provide along with there being
 * a design concept for Rocket.Chat which changes where the buttons
 * are located and they're no longer on a "tab bar".
 */
export interface IContextualBarButtonsExtend {
    /**
     * Adds a new button to the context bar.
     */
    addButton(button: IContextualBarButton): void;
}
