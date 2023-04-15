import { IConversation } from "../model/conversation.interface";
import { MockService } from "./mockService";

export class ActionsService {
  private serviceApi: MockService;

  constructor() {
    this.serviceApi = new MockService();
  }


}
