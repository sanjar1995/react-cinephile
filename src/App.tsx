import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import { router } from "./router"

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        {
          router.map((route,index)=>(
            <Route key={index} path={route.path} element={route.element}/>
          ))
        }
      </Routes>
    </div>
  )
}

export default App