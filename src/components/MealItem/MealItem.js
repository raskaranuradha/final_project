import { useNavigate } from "react-router-dom"

const MealItem = ({data}) => {
    
    console.log(data)
    const navigate = useNavigate()
    return (
        <>
        {
            (!data) ? "Item Does Not Found" : data.map(item => {
                return(
                <div className="card" key={item.idMeal} >
                    <img src = {item.strMealThumb} alt="" 
                    onClick= {()=> {navigate(`/meal/${item.idMeal}`)}}/>
                    <h3>{item.strMeal}</h3>
                </div>
                )
            })
        }
        </>
    )
}

export default MealItem