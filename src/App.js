import { Route, Switch } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import Menu from './components/Menu';
import HomeFeature from './features/Home';
import TodoFeature from './features/TodoFeature';

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <Banner />
        <Menu />
        <Switch>
          <Route path="/" component={HomeFeature} exact />
          <Route path="/todofeature" component={TodoFeature} />

        </Switch>

        <Footer />
      </>

    </div>
  );
}

export default App;
