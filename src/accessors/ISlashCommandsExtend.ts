import { ISlashCommand } from '../slashcommands';

/**
 * This accessor provides methods for adding custom slash commands
 * of Rocket.Chat in a compatible way. Use it during initialization of your Rocketlet
 */

export interface ISlashCommandsExtend {

    /**
     * Adds a slash command which can be used during conversations lateron.
     * Should a command already exists an error will be thrown.
     *
     * @param slashCommand the command information
     */
    provideSlashCommand(slashCommand: ISlashCommand): void;
}
