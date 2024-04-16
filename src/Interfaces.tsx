interface IRouter {
  path: string;
  element: JSX.Element;
  name: JSX.Element | string;
}
interface IUpcoming {
  backdrop_path: string;
  id: number;
  overview: string;
  poster_path: string;
  title: string;
}
interface StoreState {
  upcoming: IUpcoming[];
  getUpcoming: (data: any[]) => void;
}
