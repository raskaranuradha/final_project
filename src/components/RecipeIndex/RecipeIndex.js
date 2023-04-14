

const RecipeIndex = ({categoryList}) => {
    const categories = ["Beef","Chicken","Dessert","Lamb","Miscellaneous","Pasta","Pork","Seafood","Side","Starter","Vegan","Vegetarian","Breakfast","Goat"]
    var num=0
    return(
        <>
            {
            categories.map(item => {
                return (
                    <div className="numBox" key={num++} onClick={() => categoryList(item)}>
                        <h3>{item}</h3>
                    </div>
                )
            })
            }
        </>
    )
}

export default RecipeIndex