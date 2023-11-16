import {useFetchData} from "../hooks/useFetchData.js";

export const Personajes = () => {

   const {data, isLoading} = useFetchData([])
    console.log(data)
    return(
        <>
            <h1>Personajes</h1>

        </>
    )
}