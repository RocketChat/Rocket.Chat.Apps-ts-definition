import { ISlashCommand } from '../slashcommands';

/**
 * This accessor provides methods for modifying existing Rocket.Chat slash commands.
 * It is provided during "onEnable" of your Rocketlet.
 */
export interface ISlashCommandsModify {
    /**
     * Modifies an existing command. The command must either be your Rocketlet's
     * own command or a system command. One Rocketlet can not modify another
     * Rocketlet's command.
     *
     * @param slashCommand the modified slash command
     */
    modifySlashCommand(slashCommand: ISlashCommand): void;

    /**
     * Renders an existing slash command un-usable.
     *
     * @param command the command's usage without the slash
     */
    disableSlashCommand(command: string): void;

    /**
     * Enables an existing slash command to be usable again.
     *
     * @param command the command's usage without the slash
     */
    enableSlashCommand(command: string): void;
}
