import "./App.css";
import Header from "./components/Header/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import HeaderMain from "./components/HeaderMain/HeaderMain";
import MainContent from "./components/MainContent/MainContent";
import SignUp from "./pages/signUp/SignUp";
import SignIn from "./pages/signIn/SignIn";
import Footer from "./components/Footer/Footer";
import { useSelector } from "react-redux";
import MyTeam from "./pages/my-team/MyTeam";
import MainProducts from "./pages/MainProducts/MainProducts";
import CartPage from "./pages/Cart/CartPage";
import CabinetPage from "./pages/Cabinet/CabinetPage";
import CabinetChange from "./pages/Cabinet/CabinetChange";
import BuyPage from "./pages/Buy/BuyPage";
import FavoritePage from './pages/Favorite/FavoritePage';
import Costums from './pages/MainProducts/Category/Costums';
import Bruks from "./pages/MainProducts/Category/Bruks";
import Ochki from './pages/MainProducts/Category/Ochki';
import Rubashki from "./pages/MainProducts/Category/Rubashki";
import Chasi from './pages/MainProducts/Category/Chasi';
import News from "./pages/News/News";
import Kontact from "./pages/Kontact/Kontact";
import Obuv from "./pages/MainProducts/Category/Obuv";

function App() {
  const token = useSelector((state) => state.user.token);
  const product = useSelector((state) => state.products.products);

  if (
    !token ||
    token === "Неверный пароль" ||
    token === "Неверный логин" ||
    token === "Неверный логин или пароль"
  ) {
    return (
      <div className="App">
        <Header />
        <HeaderMain />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/auth" element={<SignIn />} />
          <Route path="/my-team" element={<MyTeam />} />
          <Route path="/products" element={<MainProducts />} />
          <Route path="/cart" element={<Navigate to="/register" />}></Route>
          <Route path="/cabinet" element={<Navigate to="/register" />}></Route>
          <Route path="/cabinetchange" element={<Navigate to="/register" />}></Route>
          <Route path="/buy" element={<Navigate to="/register" />}></Route>
          <Route path="/favorite" element={<Navigate to="/register" />}></Route>
        </Routes>
        <Footer />
      </div>
    );
  }
  return (
    <div className="App">
      <Header />
      <HeaderMain />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/register" element={<Navigate to="/" />} />
        <Route path="/auth" element={<Navigate to="/" />} />
        <Route path="/my-team" element={<MyTeam />} />
        <Route path="/products" element={<MainProducts />} />
        <Route path="/kostums" element={<Costums />}/>
        <Route path="/bruks" element={<Bruks />} />
        <Route path="/ochki" element={<Ochki />} />
        <Route path="/obuv" element={<Obuv />}/>
        <Route path="/rubashki" element={<Rubashki />} />
        <Route path="/clocks" element={<Chasi />} />
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/cabinet" element={<CabinetPage />}></Route>
        <Route path="/cabinetchange" element={<CabinetChange />}></Route>
        <Route path="/buy" element={<BuyPage />}></Route>
        <Route path="/favorite" element={<FavoritePage />}></Route>
        <Route path="/news" element={<News/>} />
        <Route path="/kontact" element={<Kontact/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
