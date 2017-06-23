import { ISlashCommand } from '../slashcommands';

/**
 * This accessor provides methods for modifying existing slash commands
 * Use it during initialization of your Rocketlet
 */
export interface ISlashCommandsModify {

    /**
     * changes how a slash command behaves
     * @param slashCommand
     */
    modifySlashCommand(slashCommand: ISlashCommand);

    /**
     * Renders an existing slash command un-usable
     * @param command the command shortcut (without the slash)
     */
    disableSlashCommand(command: string): void;
}
