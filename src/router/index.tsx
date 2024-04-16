import Home from "../pages/Home";
import Movie from "../pages/Movie";
import Search from "../pages/Search";
import Tv from "../pages/Tv";
import searchIcon from "@i/search.svg";
export const router:IRouter[] = [
    {
        path:'/',
        element:<Home/>,
        name:'Главная'
    },
    {
        path:'/movie',
        element:<Movie/>,
        name:'Фильмы'
    },
    {
        path:'/tv',
        element:<Tv />,
        name:'Сериалы'
    },
    {
        path:'/search',
        element:<Search />,
        name: <img src={searchIcon} alt="" />
    },
]