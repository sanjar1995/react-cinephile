import Upcoming from '../components/Upcoming'
import MovieSlide from '../components/MovieSlide'

function Home() {
  return (
    <>
    <Upcoming/>
    <MovieSlide type="movie"/>
    <MovieSlide type="tv"/>
    </>
  )
}

export default Home