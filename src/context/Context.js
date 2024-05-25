import { Children, createContext,useEffect,useState } from "react";

export const Context = createContext()

const ContextProvider = ({children})=>{
    const [country,setcountry] = useState("in");
    const [news,setNews] = useState([]);
    const [page,setPage] = useState(1);
    const [category,setCategory] = useState("");
    useEffect(()=>{
        getData();
    },[country, category, page])

    const getData=async()=>{
        try {
            let url = "https://newsapi.org/v2/top-headlines?country="+country+"&category="+category+"&page="+page+"&apiKey="+ process.env.REACT_APP_API_KEY;
            let fetchData = await fetch(url);
            let data = await fetchData.json();
            setNews(data.articles);
        } catch (error) {
            console.log("error in context.js getData():-\n");
            console.log(error);
        }
    }
    return(
        <Context.Provider value={{country,setcountry,news,page,setPage,setCategory}}>
            {children}
        </Context.Provider>
    )
}
export default ContextProvider;