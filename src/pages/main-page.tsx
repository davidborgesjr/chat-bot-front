import Box from "@mui/material/Box";

import Conversation from "./../components/conversation-board.component";
import InputMessage from "./../components/input-message.component";

import { MessagesService } from "./../services/messages.service";
import { AppContext } from "./../app.context";
import { useContext } from "react";

export default function MainPage() {
  const {
    services: { messageService },
  } = useContext(AppContext);

  const boxDefault = {
    minWidth: "50%",
    maxWidth: "50%",
    padding: 2,
  };

  const messagesService: MessagesService = new MessagesService();

  return (
    <div>
      <Box sx={boxDefault}>
        <Conversation messages={messageService.getMessages()} />
        <InputMessage />
      </Box>
    </div>
  );
}
