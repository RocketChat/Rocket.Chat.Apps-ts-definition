export interface ISetting {
    id: string;
    type: string;
    group: string;
    packageValue: any;
    hidden: boolean;
    blocked: boolean;
    i18nLabel: string;
    i18nDescription: string;
    updatedAt: Date;
    createdAt: Date;
    value: any;
}
