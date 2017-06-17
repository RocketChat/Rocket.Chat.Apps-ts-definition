export interface ISetting {
    _id: string;
    type: string;
    group: string;
    packageValue: any;
    hidden: boolean;
    blocked: boolean;
    i18nLabel: string;
    i18nDescription: string;
    ts: Date;
    _updatedAt: Date;
    createdAt: Date;
    value: any;
}
