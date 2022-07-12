import Header from './Header';
import RecipeCard from './RecipeCard';
import Footer from "./Footer";
import { AppStyles } from "./css/Styles";
import recipes from "./starter_recpies/starter_recipes";

function App() {
  return (
    <AppStyles>
      <Header />
      {
        recipes.map((el) => 
          <RecipeCard key={el.id} name={el.name} description={el.description} img={el.img} alt={el.alt}/>
        )

      }
      <Footer />
    </AppStyles>
  );
}

export default App;
