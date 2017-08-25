export enum RocketChatAssociationModel {
    ROOM = 'room',
    MESSAGE = 'message',
    USER = 'user',
    MISC = 'misc',
}

export class RocketChatAssociationRecord {
    constructor(private model: RocketChatAssociationModel, private id: string) { }

    public getModel() {
        return this.model;
    }

    public getID() {
        return this.id;
    }
}
