
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Carousel from './components/Carousel/Carousel';
import { Route, Switch } from 'react-router';
import Heading from './components/Heading/Heading';
import Banner from './components/Banner/Banner';
import ImageBanner from './components/Banner/ImageBanner';
import MealPlansContainer from './components/MealPlansConatiner/MealPlansContainer';
import MealPlanDetails from './components/MealPlanDetails/MealPlanDetails';



function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route path="/" exact>
          <Carousel />
          <Heading>
            HEALTHY EATING
          </Heading>
          <MealPlansContainer take="3" />
          <Banner
            heading="Different menus"
            text="We've got hundreds of delicious recipes for every taste and dietary preference. Browse them all using our Search and Filter tools and choose the ones that are right for you."
          />
          <ImageBanner />
        </Route>
        <Route path="/plans/all" >
          <MealPlansContainer />
        </Route>
        <Route path="/categories/:category" component={MealPlansContainer} />
        <Route path="/details/:id" component={MealPlanDetails}/>
      </Switch>

      <Footer />
    </>
  );
}

export default App;
