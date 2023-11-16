import {useEffect, useState} from "react";
import {fetchData} from "../helpers/fetchData.js";

export const useFetchData=()=> {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const llamarFetch = async () => {
        const {data, isLoading} = await fetchData()
        setData(data)
        setIsLoading(isLoading)

    }

    useEffect(() => {
        llamarFetch()
    }, []);

    return{
        data, isLoading
    }
}