import { IOptions } from "./actions.interface";
import { IConversation } from "./conversation.interface";

export enum UiElementTypes {
    CHIPS = 'chips',
    INPUT = 'input',
    BUTTON = 'button',
}

export interface IMessage{
    conversation: IConversation;
    content: string;
    date: string;
    position: number;
    isSender: boolean;
    elementType: UiElementTypes;
}

export interface IChipsMessage extends IMessage {
    options: IOptions[];
}
