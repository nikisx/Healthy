
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Carousel from './components/Carousel/Carousel';
import { Route, Switch } from 'react-router';
import Heading from './components/Heading/Heading';
import Banner from './components/Banner/Banner';
import ImageBanner from './components/Banner/ImageBanner';


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
          <Banner 
          heading="Difrent menus"
          text="Test Test TestTestTestTestTestTestTestTestTestTestTest"
          />
          <ImageBanner/>
        </Route>
      </Switch>

      <Footer />
    </>
  );
}

export default App;
