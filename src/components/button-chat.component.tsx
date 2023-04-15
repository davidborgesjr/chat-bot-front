import { Button } from "@mui/material";
import { IMessage } from "../model/message.interface";

interface IButtonChatProps {
  message: IMessage;
}

export default function ButtonChat(params: IButtonChatProps) {
  const { message } = params;
  const userTypeColor = message.isSender ? "primary" : "success";
  return (
    <Button variant="contained" color={userTypeColor}>
      {message.content}
    </Button>
  );
}
