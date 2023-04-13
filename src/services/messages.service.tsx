import { IMessage } from "../model/message.interface";
import { MockService } from "./mockService";

export class MessagesService {
  private serviceApi: MockService;
  private messages: IMessage[];

  constructor() {
    this.serviceApi = new MockService();
    this.messages = this.serviceApi.getMessage();
  }

  getMessages() {
    return this.messages;
  }

  getLastMessage() {
    const length = this.messages.length;
    return this.messages[length - 1];
  }

  addNewMessage(message: IMessage) {
    this.messages.push(message);
  }
}
