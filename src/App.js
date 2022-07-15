import { useState } from "react";
import Header from './Header';
import RecipeCard from './RecipeCard';
import Footer from "./Footer";
import { AppStyles } from "./css/Styles";
import recipes from "./starter_recpies/starter_recipes";
import FullRecipe from "./FullRecipe";


function App() {
  const [modalState, setModalState] = useState(false);
  const [fullRecipe, setFullRecipe] = useState({})
  const clickHandler = (e, el) => {
    e.preventDefault();
    setModalState(!modalState);
    setFullRecipe(el);
    console.log(fullRecipe);
  }
  return (
    <AppStyles>
      <Header />
      {
        recipes.map((el) => 
          <RecipeCard 
          key={el.id} 
          name={el.name} 
          description={el.description} 
          img={el.img} alt={el.alt} 
          onClick={(e) => clickHandler(e,el)}/>
        )

      }
      {modalState && 
      <FullRecipe 
        name={fullRecipe.name}
        description={fullRecipe.description}
        ingredients={fullRecipe.ingredients}
        img={fullRecipe.img}
        alt={fullRecipe.alt}
        instructions={fullRecipe.instructions}
      />}
      <Footer />
    </AppStyles>
  );
}

export default App;
