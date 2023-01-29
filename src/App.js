
import Home from "./pages/Home/Home"
import "./style/dark.scss"
import Customers from "./pages/Customer/Customers"
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
            <Route path="Products">
              <Route index element={<Home />} />
            </Route>
            <Route path="Inventory">
              <Route index element={<Home />} />
            </Route>
            <Route path="Transaction">
              <Route index element={<Home />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}


export default App;
