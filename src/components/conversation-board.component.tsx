import { Box } from "@mui/material";
import { IMessage } from "../model/message.interface";
import ButtonChat from "./button-chat.component";
import { ALIGN_TO_THE_LEFT, ALIGN_TO_THE_RIGHT } from "../consts/style-consts";

interface IConversationProps {
  messages: IMessage[];
}

export default function Conversation(params: IConversationProps) {
  const { messages } = params;
  return (
    <>
      {messages.map((message) => {
        const alignItems = message.isSenderMessage
          ? ALIGN_TO_THE_RIGHT
          : ALIGN_TO_THE_LEFT;
        return (
          <Box
            alignItems={alignItems}
            display="flex"
            justifyContent={alignItems}
            key={message.position}
          >
            <ButtonChat isSender={message.isSenderMessage}  key={message.position}>
              {message.content}
            </ButtonChat>
          </Box>
        );
      })}
    </>
  );
}
