import { Box } from "@mui/material";
import ButtonChat from "./button-chat.component";
import { ALIGN_TO_THE_LEFT, ALIGN_TO_THE_RIGHT } from "../consts/style-consts";
import { IMessage } from "../model/message.interface";

interface IConversationProps {
  message: IMessage;
}

export default function Conversation(props: IConversationProps) {
  const { message } = props;
  const alignItems = message.isSender ? ALIGN_TO_THE_RIGHT : ALIGN_TO_THE_LEFT;

  return (
    <Box
      alignItems={alignItems}
      display="flex"
      justifyContent={alignItems}
      key={message.position}
    >
      <ButtonChat message={message} key={message.position} />
    </Box>
  );
}
