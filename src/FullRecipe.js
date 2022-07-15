import {FullRecipeStyles} from "./css/Styles";

const FullRecipe = (props) => {
  return (
    <FullRecipeStyles>
      <div>
        <span>x</span>
        <h3>{props.name}</h3>
        <img src={props.img} alt={props.alt}/>
        <p>{props.description}</p>
        <ol>
          {props.ingredients.map((el) => <li>{el}</li>)}
        </ol>
        <p>{props.instructions}</p>
        <button>Edit Recipe</button>
        <button>Delete Recipe</button>
        </div>
        
    </FullRecipeStyles>
  )
}

export default FullRecipe;