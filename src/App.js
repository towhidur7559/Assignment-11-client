import "./App.css";
import Navbar from "./Pages/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/Blog";
import AddItems from "./Pages/AddItems/AddItems";
import MyItems from "./Pages/MyItems/MyItems";
import ManageItems from "./Pages/ManageItems/ManageItems";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import NotFound from "./Pages/NotFound/NotFound";
import PrivateAuth from "./PrivateAuth/PrivateAuth";
import Update from "./Pages/Update/Update";
import Footer from "./Pages/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route
          path="/additems"
          element={
            <PrivateAuth>
              <AddItems></AddItems>
            </PrivateAuth>
          }
        ></Route>
        <Route
          path="/myitems"
          element={
            <PrivateAuth>
              <MyItems></MyItems>
            </PrivateAuth>
          }
        ></Route>
        <Route
          path="/manageitems"
          element={
            <PrivateAuth>
              <ManageItems></ManageItems>
            </PrivateAuth>
          }
        ></Route>
        <Route
          path="/update/:productId"
          element={
            <PrivateAuth>
              <Update></Update>
            </PrivateAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
