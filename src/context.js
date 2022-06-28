import React, { createContext, useContext, useEffect, useState }  from 'react'

const AppContext = createContext();

const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`   

const AppProvider = ({children})=>{
    const [isLoading, setIsLoading] = useState(true)
    const [movies, setMovies] = useState([])
    const [isError, setIsError] = useState({show: false, msg: ""})
    const [query, setQuery] = useState("hacker")

    const getMovies = async(url)=>{
        try{
            let result = await fetch(url);
            let data = await result.json()
            console.log(data)
            if(data.Response === "True"){
                setMovies(data.Search)
                setIsLoading(false)
            }
            else{
                setIsError({show: true, msg: data.Error})
            }
        }catch(error){
            console.log(error)
        }      
    }
    useEffect(()=>{
       let timerOut = setTimeout(()=>{
            getMovies(`${API_URL}&s=${query}`)
        }, 800)
        return ()=>{clearTimeout(timerOut)}
    },[query])
   
    return <AppContext.Provider value={{movies, isError, isLoading, query, setQuery, API_URL}} >{children}</AppContext.Provider>
}

//creating global custom hook
const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppContext, AppProvider, useGlobalContext}