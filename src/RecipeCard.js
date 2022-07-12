import {CardStyles} from "./css/Styles";

const RecipeCard = (props) => {
  return (
    <CardStyles >
      <img src={props.img} alt={props.alt}/>
        <h3>{props.name}</h3>
        <div>
          <p>{props.description}</p>
          <button>View Recipe</button>
        </div>
    </CardStyles>
  )
}

export default RecipeCard;