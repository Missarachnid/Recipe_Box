import Header from './Header';
import RecipeCard from './RecipeCard';
import Footer from "./Footer";
import { AppStyles } from "./css/Styles";
function App() {
  return (
    <AppStyles>
      <Header />
      <RecipeCard />
      <Footer />
    </AppStyles>
  );
}

export default App;
