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
interface IMovieTv extends IUpcoming {
  
}
interface upcomingStore {
  upcoming: IUpcoming[];
  getUpcoming: (data: any[]) => void;
}
interface movieOrTvStore {
  movie: IMovieTv[];
  tv: IMovieTv[];
  getMovieOrTv: (data: any[], type:String) => void;
}
