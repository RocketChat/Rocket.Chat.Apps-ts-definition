import { ISlashCommand } from '../slashcommands';

/**
 * This accessor provides methods for modifying existing Rocket.Chat slash commands.
 * It is provided during "onEnable" of your Rocketlet.
 */
export interface ISlashCommandsModify {
    /**
     * Changes how a slash command behaves, so you can provide a different item
     * per configuration.
     *
     * @param slashCommand the modified slash command
     */
    modifySlashCommand(slashCommand: ISlashCommand);

    /**
     * Renders an existing slash command un-usable.
     *
     * @param command the command's usage without the slash
     */
    disableSlashCommand(command: string): void;
}
