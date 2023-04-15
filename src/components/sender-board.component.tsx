import { Box } from "@mui/material";
import {
  IChipsMessage,
  IMessage,
  UiElementTypes,
} from "../model/message.interface";
import ButtonChat from "./button-chat.component";
import { ALIGN_TO_THE_LEFT, ALIGN_TO_THE_RIGHT } from "../consts/style-consts";
import InputMessage from "./input-message.component";
import { useContext, useState } from "react";
import { AppContext } from "../app.context";
import ClickableChips from "./chips-component";
import { IConversation } from "../model/conversation.interface";
import { IOptions } from "../model/actions.interface";

interface ISenderBoardProps {
  message: IMessage;
  onInputUpdate: Function;
  onOptionsSender: Function;
}

export default function SenderBoard(props: ISenderBoardProps) {
  const { message, onInputUpdate } = props;

  function handleOnClickSendMsg(message: string) {
    sendMsgValue(message);
  }
  let element;

  const handleClick = (option: IOptions) => {
    sendMsgValue(option.description);
    props.onOptionsSender(option);
  };

  function sendMsgValue(msgContent: string) {
    onInputUpdate(msgContent);   
  }

  switch (message.elementType) {
    case UiElementTypes.BUTTON:
      element = (
        <>
          <ButtonChat message={message} key={message.position} />
          <InputMessage handleOnClickSendMsg={handleOnClickSendMsg} />
        </>
      );
      break;
    case UiElementTypes.CHIPS:
      element = (
        <>
          <ButtonChat message={message} key={message.position} />
          <ClickableChips handleClick={handleClick} message={message as IChipsMessage} />
        </>
      );
  }

  return (
    <Box
      alignItems={ALIGN_TO_THE_RIGHT}
      display="flex"
      justifyContent={ALIGN_TO_THE_RIGHT}
      key={message.position}
    >
      {element}
    </Box>
  );
}
