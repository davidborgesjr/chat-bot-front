import { Box, Button, FormControl, Input, InputLabel } from "@mui/material";
import { ALIGN_TO_THE_LEFT, ALIGN_TO_THE_RIGHT } from "../consts/style-consts";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

interface IInputMessageProps {
  handleOnClickSendMsg: Function;
}

export default function InputMessage(params: IInputMessageProps) {
  const { handleOnClickSendMsg } = params;
 
  const [inputMsgField, setInputMsgField] = useState("");
  
  function handleInputMsgField(inputContent: string) {
    setInputMsgField(inputContent);
  }

  function onClickBtnSend() {
    if(handleOnClickSendMsg){
      handleOnClickSendMsg(inputMsgField);
    }
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
