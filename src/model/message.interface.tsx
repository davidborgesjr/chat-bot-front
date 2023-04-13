import { IConversation } from "./conversation.interface";

export interface IMessage{
    conversation: IConversation;
    content: string;
    date: string;
    position: number;
    isSenderMessage: boolean;
}