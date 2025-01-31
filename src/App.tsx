import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainPage from "./ArticleComp/Index";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./components/Products/Products";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getProducts } from "./store/productReducer/productActionCreators";
import { productData } from "./Data/productData";

function App() {
  type AppDispatch = ThunkDispatch<productStateType, any, AnyAction>;

  const { featuredProducts } = useSelector(
    (state: AppState) => state.productReducer
  );
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(productData));
  }, []);
  return (
    <React.Fragment>
      <Navbar />
      {/* <MainPage /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </React.Fragment>
  );
}

export default App;
