// just guessing
export interface ISlashCommand {
    command: string;
    pattern: string;
    function: () => boolean;
}
