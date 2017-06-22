import { ISlashCommand } from '../slashcommands';

/**
 * This accessor provides methods for adding custom slash commands
 * of Rocket.Chat in a compatible way. Use it during initialization of your Rocketlet
 */

export interface ISlashCommandsExtend {

    /**
     * Adds a slash command which can be used during conversations lateron
     * @param slashCommand
     */
    provideSlashCommand(slashCommand: ISlashCommandsExtend): void;
}
