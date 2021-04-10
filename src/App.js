
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Carousel from './components/Carousel/Carousel';
import { Redirect, Route, Switch } from 'react-router-dom';
import Heading from './components/Heading/Heading';
import Banner from './components/Banner/Banner';
import ImageBanner from './components/Banner/ImageBanner';
import MealPlansContainer from './components/MealPlansConatiner/MealPlansContainer';
import MealPlanDetails from './components/MealPlanDetails/MealPlanDetails';
import AddMeal from './components/AddMeal/AddMeal';
import MealPlanEdit from './components/MealPlanEdit/MealPlanEdit';
import Login from './components/Login/Login';
import UserContext from './components/Context/UserContext';
import { useEffect, useState } from 'react';
import { auth } from './utils/firebase';
import MyMeals from './components/MyMeals/MyMeals';
import Register from './components/Register/Register';
import BackToTop from "react-back-to-top";

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, []);

  const authInfo = {
    isAuthenticated: Boolean(user),
    username: user?.email,
    id: user?.uid,
  };

  return (
    <>
    <UserContext.Provider value={authInfo}>

      <Header />

      <Switch>
        <Route path="/" exact>
          <Carousel />
          <Heading>
            HEALTHY EATING
          </Heading>
          <MealPlansContainer take="3"/>
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
        <Route path="/add" component={AddMeal}/>
        <Route path="/edit/:id" component={MealPlanEdit}/>
        <Route path="/login" component={Login}/>
        <Route path="/logout" render={() => {
          auth.signOut();
          return <Redirect to="/" />
        }} />
         <Route path="/my-meals" component={MyMeals}/>
         <Route path="/register" component={Register}/>
      </Switch>
        <BackToTop
         showOnScrollUp
         showAt={100}
         speed={1500}
         easing="easeInOutQuint"
        >
          <span>to the top</span>
        </BackToTop>
      <Footer />
      </UserContext.Provider>
    </>
  );
}

export default App;
