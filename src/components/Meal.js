import MealItem from "./MealItem"
import RecipeIndex from "./RecipeIndex"
import { useEffect, useState } from "react"

const Meal = () => {
    const [url,setUrl]=useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=a")
    const [item,setItem]=useState()
    const [show,setShow]=useState(false)
    const [search, setSearch]=useState("")

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{console.log(data.meals)
            setItem(data.meals)
            setShow(true)
        })
    },[url])

    const setIndex = (alpha) => {
        setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
    }

    const searchRecipe = (event) => {
        if(event.key==="Enter"){
            setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        }
    }

    return (
        <>
            <div className="main">
                <div className="heading">
                    <h1>Search Your Food Recipe</h1>
                    
                </div>
                <div className="searchBox">
                    <input type="text" className="search-bar" onChange={e=>setSearch(e.target.value)} onKeyDown={searchRecipe}/>
                    
                </div>
                <div className="container">
                    {
                        show ? <MealItem data={item}/> :"Item Does Not Found"

                    }
   
                </div>
                <div className="indexContainer">
                    <RecipeIndex alphaIndex={(alpha) => setIndex(alpha)} />
                </div>
            </div>
        </>
    )
}

export default Meal