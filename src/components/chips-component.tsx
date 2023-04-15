import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { IChipsMessage } from "../model/message.interface";

interface IClickableChipsProps {
  message: IChipsMessage;
  handleClick: Function;
}

export default function ClickableChips(params: IClickableChipsProps) {
  const { message, handleClick } = params; 
  return (
    <>
      {message.options.map((option) => {
        return (
          <Stack key={option.id} direction="row" spacing={1}>
            <Chip key={option.id} label={option.description} onClick={() => handleClick(option)} />
          </Stack>
        );
      })}
    </>
  );
}
