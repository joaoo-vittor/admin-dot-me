import { TopBar } from './components/TopBar';
import { SideBar } from './components/SideBar';
import { Home } from './pages/Home';
import { UserList } from './pages/UserList';
import { User } from './pages/User';
import { NewUser } from './pages/NewUser';
import { ProductList } from './pages/ProductList';
import { Product } from './pages/Product';
import { NewProduct } from './pages/NewProduct';
import { NotFound } from './pages/NotFound';
import { 
  BrowserRouter,
  Switch,
  Route  } from 'react-router-dom';

import './globalStyle.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <TopBar />
        <div className="container">
          <SideBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/users">
              <UserList />
            </Route>
            <Route path="/user/:userId">
              <User />
            </Route>
            <Route path="/new_user">
              <NewUser />
            </Route>
            <Route path="/products">
              <ProductList />
            </Route>
            <Route path="/product/:productId">
              <Product />
            </Route>
            <Route path="/new_product">
              <NewProduct />
            </Route>
            <Route to="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
