import Chat from "../pages/Chat/Chat";
import Main from "../pages/Main/Main";
import { CHAT_ROUTE, MAIN_ROUTE } from "../utils/consts";

export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    Component: Main,
  },
  {
    path: CHAT_ROUTE,
    Component: Chat,
  },
];
