
import Home from "./pages/Home/Home"
import "./style/dark.scss"
import Customers from "./pages/Customers/Customers"
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Products } from "./pages/Products/Products";
import { Transactions } from "./pages/Transactions/Transactions";
import { Inventory } from "./pages/Inventory/Inventory";


function App() {
  return (
    <div className="app">
      <ToastContainer autoClose={1000} />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="customers">
              <Route index element={<Customers />} />
            </Route>
            <Route path="products">
              <Route index element={<Products />} />
            </Route>
            <Route path="inventory">
              <Route index element={<Inventory />} />
            </Route>
            <Route path="transactions">
              <Route index element={<Transactions />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}


export default App;
