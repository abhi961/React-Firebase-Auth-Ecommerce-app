import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cartpage from "./component/Cartpage";
import Contactpage from "./component/Contactpage";
import ForgotPass from "./component/ForgotPass";
import Header from "./component/Header";
import Home from "./component/Home";
import Login from "./component/Login";
import Productpage from "./component/Productpage";
import Signup from "./component/Signup";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./component/ProtectedRoute";
import "./App.css";
import  ProductDetails  from "./component/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <UserAuthContextProvider>
        <Routes>
          <Route
            index
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/product"
            element={
              <ProtectedRoute>
                <Productpage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <Contactpage />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cartpage />
              </ProtectedRoute>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/forgotpassword"
            element={
              <ProtectedRoute>
                <ForgotPass />
              </ProtectedRoute>
            }
          />
          <Route path="/details/:productId" element={<ProtectedRoute>
            <ProductDetails/>
          </ProtectedRoute>} />
        </Routes>
      </UserAuthContextProvider>
    </BrowserRouter>
  );
}
export default App;
