import { useEffect, useState } from "react"
import api from "../api/ClientApi"

function useApi() {
    const [data, setdata] = useState([])
    async function getData(){
        let {data} = await api.get('movie/upcoming')
        setdata(data.results)
    } 
    useEffect(()=>{
       getData() 
    },[])
  return {data}
}

export default useApi