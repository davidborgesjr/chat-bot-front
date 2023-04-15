import React from "react";
import { IMessage } from "../model/message.interface";
import { MockService } from "./mockService";

export class MessagesService {
  private serviceApi: MockService;
  private messages: IMessage[] = [];

  constructor() {
    this.serviceApi = new MockService();
    this.messages = this.serviceApi.getStartMessage();
  }

  getMessages() {
    return this.messages;
  }

  getLastMessage() {
    const length = this.messages.length;
    return this.messages[length - 1];
  }

  getInitialMessages() {
    return this.serviceApi.getStartMessage();
  }

  getCurrentSenderBoard() {
    return this.serviceApi.getCurrentSenderBoard();
  }

  getActionsFromOption(id: string): IMessage {
    switch (id) {
      case "1":
        return this.serviceApi.getCheckingAccountMessage();
      case "2":
        return this.serviceApi.getSavingsAccountMessage();
      case "3":
        return this.serviceApi.getCreditCardMessage();
        case "4":
      default:
        return this.serviceApi.getNoOptionsAvailable();
    }
  }

  sendSenderMessage(message: IMessage) {
    this.addNewMessage(message);
    this.getMessageFromBot(message.position);
  }

  addNewMessage(message: IMessage) {
    let currentMsgs = [...this.messages];
    currentMsgs.push(message);
    this.messages = [...currentMsgs];
  }

  private getMessageFromBot(position: number) {}
}
