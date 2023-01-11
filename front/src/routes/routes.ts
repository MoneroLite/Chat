import Room from "../pages/Room/Room";
import Main from "../pages/Main/Main";
import { CHAT_ROUTE, MAIN_ROUTE } from "../utils/consts";

export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    Component: Main,
  },
  {
    path: CHAT_ROUTE,
    Component: Room,
  },
];
