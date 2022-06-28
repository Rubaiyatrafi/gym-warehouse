import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Checkout from "./pages/Checkout/Checkout";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login";
import RequireAuth from "./pages/Login/RequireAuth/RequireAuth";
import Signup from "./pages/Login/Signup/Signup";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Footer from "./pages/Shared/Footer/Footer";
import Header from "./pages/Shared/Header/Header";
import NotFound from "./pages/Shared/NotFound/NotFound";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/single/:singleId"
          element={<ProductDetail></ProductDetail>}
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
