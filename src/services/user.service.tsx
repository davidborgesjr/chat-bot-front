import { IUser } from "../model/user.interface";
import { MockService } from "./mockService";

export class UserService {
  private serviceApi: MockService;
  private sender: IUser;
  private recipient: IUser;
  
  constructor() {
    this.serviceApi = new MockService();
    this.sender = this.serviceApi.getSenderInfo();
    this.recipient = this.serviceApi.getRecipientInfo();
  }

  getCurrentSender(): IUser {
    return this.sender;
  }

  getCurrentRecipient(): IUser {
    return this.recipient;
  }
}
