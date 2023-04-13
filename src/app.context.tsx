import { MessagesService } from "./services/messages.service";
import React, { ReactNode } from "react";

interface Props {
    children?: ReactNode
}

const services = {
  messageService: new MessagesService(),
};

const AppContext = React.createContext({services});
const { Provider } = AppContext;
const AppProvider = ({ children, ...props }: Props) => {
  return <Provider value={{ services }}>{children}</Provider>;
};
export { AppContext, AppProvider };
