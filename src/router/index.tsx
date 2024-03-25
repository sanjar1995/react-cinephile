import { IRouters } from "../Interfaces";
import Films from "../pages/Tv";
import Tv from "../pages/Films";
import Home from "../pages/Home";

export const router:IRouters[] = [
  {
    path: "/",
    element: <Home />,
    name: "Главная",
  },
  {
    path: "/films",
    element: <Films />,
    name: "Фильмы",
  },
  {
    path: "/tv",
    element: <Tv />,
    name: "Сериалы",
  },
];
