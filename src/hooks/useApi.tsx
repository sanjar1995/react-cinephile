import { useEffect, useState } from "react";
import api from "../Interceptor";
import useStore from "../store/upcoming";
function useApi(url:string) {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  const { getUpcoming } = useStore()
  async function getApi() {
    let { data } = await api.get(url);
    getUpcoming(data.results);
    setdata(data.results);
    setloading(false);
  }
  useEffect(() => {
    getApi();
  }, []);
  return { data, loading };
}

export default useApi;
