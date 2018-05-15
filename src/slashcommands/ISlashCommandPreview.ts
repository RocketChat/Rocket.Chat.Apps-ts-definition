export interface ISlashCommandPreview {
    i18nTitle: string;
    items: Array<ISlashCommandPreviewItem>;
}

export interface ISlashCommandPreviewItem {
    id: string;
    url: string;
}
