
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Carousel from './components/Carousel/Carousel';
import { Route, Switch } from 'react-router';

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route path="/" exact>
          <Carousel />
        </Route>
      </Switch>

      <Footer />
    </>
  );
}

export default App;
