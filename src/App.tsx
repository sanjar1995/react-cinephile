import React, {useEffect} from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { router } from "./router";
import { useAxiosInterceptor } from "./api/ClientApi";
import useApi from "./hooks/useApi";
import Loading from "./components/UI/Loading";
import useUpcoming from "./store/upcoming";
function App() {
  const { loading } = useAxiosInterceptor();
  const { data } = useApi();
  const {getUpcoming} = useUpcoming()
  useEffect(()=>{
    getUpcoming(data)
  },[data])

  return (
    <div className="wrapper">
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <Routes>
          {router.map((route, index) => {
            return (
              <Route key={index} path={route.path} element={route.element} />
            );
          })}
        </Routes>
      )}
    </div>
  );
}

export default App;
