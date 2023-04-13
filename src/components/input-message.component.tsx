import { Box, Button, FormControl, Input, InputLabel } from "@mui/material";
import { ALIGN_TO_THE_LEFT, ALIGN_TO_THE_RIGHT } from "../consts/style-consts";
import SendIcon from "@mui/icons-material/Send";
import { useState, useContext } from "react";
import { AppContext } from "../app.context";
import { IMessage } from "../model/message.interface";

export default function InputMessage() {
  const [inputMsgField, setInputMsgField] = useState("");
  const {
    services: { messageService },
  } = useContext(AppContext);

  function handleInputMsgField(inputContent: string) {
    setInputMsgField(inputContent);
  }

  function onClickBtnSend() {
    const { conversation, position} = messageService.getLastMessage()
    const message: IMessage = {
        content: inputMsgField,
        conversation,
        date: new Date().toString(),
        isSenderMessage: true,
        position: position+1,
    }
    messageService.addNewMessage(message);
  }

  return (
    <>
      <Box
        alignItems={ALIGN_TO_THE_LEFT}
        display="flex"
        justifyContent={ALIGN_TO_THE_RIGHT}
      >
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount"></InputLabel>
          <Input
            id="standard-adornment-amount"
            value={inputMsgField}
            onChange={(event) => {
              handleInputMsgField(event.target.value);
            }}
          />
        </FormControl>
        <Button onClick={onClickBtnSend}>
          <SendIcon color="primary" />
        </Button>
      </Box>
    </>
  );
}
