import { IOptions } from "../model/actions.interface";
import { IConversation } from "../model/conversation.interface";
import {
  IChipsMessage,
  IMessage,
  UiElementTypes,
} from "../model/message.interface";
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
  getCurrentSenderBoard(): IMessage | IChipsMessage {
    const conversation = this.getConversation();
    return {
      content: `Please, choose one of the options below: `,
      conversation,
      isSender: false,
      date: "02-02-2015",
      position: 1,
      elementType: UiElementTypes.CHIPS,
      options: this.getActions(),
    } as IChipsMessage;
  }
  getStartMessage(): IMessage[] {
    const conversation = this.getConversation();
    return [
      {
        content: `Hey, welcome! I'm going help you with your account`,
        conversation,
        isSender: false,
        date: "02-02-2015",
        position: 1,
        elementType: UiElementTypes.CHIPS,
      },
    ];
  }

  getActions(): IOptions[] {
    return [
      {
        id: "1",
        description: "Checking Account",
      },
      {
        id: "2",
        description: "Savings account",
      },
      {
        id: "3",
        description: "Credit card",
      },
    ];
  }

  getCheckingAccountMessage(): IChipsMessage {
    const conversation = this.getConversation();
    return {
      content: `These are the options available for your checking account`,
      conversation,
      isSender: false,
      date: "02-02-2015",
      position: 1,
      elementType: UiElementTypes.CHIPS,
      options: this.getActionsFromCheckingAccount(),
    };
  }

  getSavingsAccountMessage(): IChipsMessage {
    const conversation = this.getConversation();
    return {
      content: `Take a look at the options you can check regarding your saving account`,
      conversation,
      isSender: false,
      date: "02-02-2015",
      position: 1,
      elementType: UiElementTypes.CHIPS,
      options: this.getActionsFromCheckingAccount(),
    };
  }

  getCreditCardMessage(): IChipsMessage {
    const conversation = this.getConversation();
    return {
      content: `Below are the available options for your credit card`,
      conversation,
      isSender: false,
      date: "02-02-2015",
      position: 1,
      elementType: UiElementTypes.CHIPS,
      options: this.getActionsFromCreditCard(),
    };
  }

  getNoOptionsAvailable(): IMessage {
    const conversation = this.getConversation();
    return {
      content: `I'm sorry, I couldn't understard. Please, choose one of the options below: `,
      conversation,
      isSender: false,
      date: "02-02-2015",
      position: 1,
      elementType: UiElementTypes.CHIPS,
      options: this.getActions(),
    } as IChipsMessage;
  }

  getActionsFromCheckingAccount(): IOptions[] {
    return [
      {
        id: "4",
        description: "Account balance",
      },
      {
        id: "6",
        description: "Add money",
      },
      {
        id: "7",
        description: "Transfers",
      },
    ];
  }

  getActionsFromSavingAccount() {
    return [
      {
        id: "8",
        description: "Balance",
      },
      {
        id: "9",
        description: "Add money",
      },
      {
        id: "10",
        description: "Withdraw",
      },
    ];
  }

  getActionsFromCreditCard() {
    return [
      {
        id: "11",
        description: "Credit limit",
      },
      {
        id: "12",
        description: "Purchases",
      },
    ];
  }
}
