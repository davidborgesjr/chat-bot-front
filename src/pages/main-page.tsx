import Box from "@mui/material/Box";

import Conversation from "./../components/conversation-board.component";
import { useContext, useState } from "react";
import { AppContext } from "../app.context";
import {
  IMessage,
  UiElementTypes,
} from "../model/message.interface";
import SenderBoard from "../components/sender-board.component";
import { IOptions } from "../model/actions.interface";

export default function MainPage() {
  const {
    services: { messageService, conversationService },
  } = useContext(AppContext);
  const [senderBoardMessage, setSenderBoardMessage] = useState(
    messageService.getCurrentSenderBoard()
  );

  const [showInput, setShowInput] = useState(true);

  const [messages, setMessages] = useState(messageService.getMessages());

  const boxDefault = {
    minWidth: "50%",
    maxWidth: "50%",
    padding: 2,
  };

  function onInputUpdate(msgContent: string) {
    const lastMsg = messageService.getLastMessage();
    const message: IMessage = {
      content: msgContent,
      conversation: conversationService.getConversationInfo(),
      date: new Date().toString(),
      isSender: true,
      position: lastMsg.position + 1,
      elementType: UiElementTypes.BUTTON,
    };
    let currentMsgs = [...messages];
    currentMsgs.push(message);
    messageService.addNewMessage(message);
    setMessages(currentMsgs);
    setShowInput(false);
  }

  function onOptionsSender(option: IOptions) {
    const newMessage = messageService.getActionsFromOption(option.id);
    setSenderBoardMessage(newMessage);
    setShowInput(true);
  }

  return (
    <Box sx={boxDefault}>
      {messages.map((message) => (
        <Conversation key={message.position} message={message} />
      ))}
      {showInput ? (
        <SenderBoard
          message={senderBoardMessage}
          onInputUpdate={onInputUpdate}
          onOptionsSender={onOptionsSender}
        />
      ) : null}
    </Box>
  );
}
