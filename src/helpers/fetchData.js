export const fetchData = async ()=> {
    try{
        const response = await fetch("https://rickandmortyapi.com/api/character?page=1")
        const data = response.json();
        return{
            data,
            isLoading: false
        }
    }catch (e){
        console.error(e)
    }
}