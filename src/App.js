
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import List from "./pages/list/List"
import New from "./pages/new/New"
import Single from "./pages/single/Single"
import "./style/dark.scss"

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"

import { userInputs } from "./formSource"
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"

function App() {

  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />
  };

  console.log(currentUser)

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            {/* require users to login asd */}
            <Route index element={<RequireAuth> <Home /> </RequireAuth>} />

            <Route path="users">
              <Route index element={
                <RequireAuth>
                  <List />
                </RequireAuth>
              }

              />
              <Route path=":userId" element={
                <RequireAuth>
                  <Single />
                </RequireAuth>
              } />
              <Route path="new" element={
                <RequireAuth>
                  <New inputs={userInputs}
                    title="Add new User" />
                </RequireAuth>
              } />
            </Route>

            {/* <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route> */}

          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}


export default App;
