import { IUser } from "./user.interface";

export interface IConversation {
    sender: IUser;
    recipient: IUser;
}