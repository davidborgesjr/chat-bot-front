import { IConversation } from "../model/conversation.interface";
import { IMessage } from "../model/message.interface";
import { IUser } from "../model/user.interface";

export class MockService {
  getSenderInfo(): IUser {
    return {
      id: "1",
      name: "David",
    };
  }
  getRecipientInfo(): IUser {
    return {
      id: "2",
      name: "Bot",
    };
  }
  getConversation(): IConversation {
    return {
      sender: this.getSenderInfo(),
      recipient: this.getRecipientInfo(),
    };
  }
  getMessage(): IMessage[] {
    const conversation = this.getConversation();
    return [
        {
          content: `Hi, I'm the bot. Welcome. How can I help you? `,
          conversation,
          isSenderMessage: false,
          date: "02-02-2015",
          position: 1,
        },
        {
          content: `Hi, I need to pay online`,
          conversation,
          isSenderMessage: true,
          date: "02-02-2015",
          position: 2,
        },
        {
          content: `Ok, please send me you fiscal number: `,
          conversation,
          isSenderMessage: false,
          date: "02-02-2015",
          position: 3,
        },
        {
          content: `123456789`,
          conversation,
          isSenderMessage: true,
          date: "02-02-2015",
          position: 4,
        },
      ];

  }
}
