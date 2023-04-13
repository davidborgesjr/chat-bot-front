import { IConversation } from "../model/conversation.interface";
import { MockService } from "./mockService";

export class ConversationService {
  private serviceApi: MockService;
  private conversation: IConversation;

  constructor() {
    this.serviceApi = new MockService();
    this.conversation = this.serviceApi.getConversation();
  }

  getConversationInfo(): IConversation {
    return this.conversation;
  }
}
