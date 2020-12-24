import { Route, Switch } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import Menu from './components/Menu';
import HomeFeature from './features/Home';
import Part1 from './features/Part1';

import TodoFeature from './features/TodoFeature';

function App() {
  return (
    <div className="App">
      <>
        <Header />

        <Menu />
        <Banner />

        <div className="container">
          <Switch>
            <Route path="/" component={HomeFeature} exact />
            <Route path="/todofeature" component={TodoFeature} />
            <Route path="/part1" component={Part1} />

          </Switch>
        </div>



        <Footer />
      </>

    </div>
  );
}

export default App;
