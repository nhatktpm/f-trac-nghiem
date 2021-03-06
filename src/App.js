import { Route, Switch } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';


import Menu from './components/Menu';
import Admin from './features/Admin';

import AdminDashBoard from './features/Admin/pages/AdminDashboar';
import AdminLogin from './features/Admin/pages/AdminLogin';
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

        <section className="container-fluid">
          <Switch>
            <Route path="/" component={HomeFeature} exact />
            <Route path="/todofeature/" component={TodoFeature} />
            <Route path="/part1" component={Part1} />
            <Route path="/admin" component={AdminLogin} />
            <Route path="/dashboard" component={AdminDashBoard} />

          </Switch>
        </section>
        <Footer />
      </>

    </div>
  );
}

export default App;
