import { useState } from "react"
import CONTEXT from "./context/context"
import { Routes, BrowserRouter, Route } from "react-router-dom";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import ProductPage from "./pages/ProductPage";
import SectorPage from "./pages/SectorPage";
import MyAdsPage from "./pages/MyAdsPage";


function App() {

  return (
    <CONTEXT.Provider value={{}}>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<SignInPage/>}/>
          <Route path="/cadastro" element={<SignUpPage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/:category/:id" element={<ProductPage/>}/>
          <Route path="/:sector" element={<SectorPage/>}/>
          <Route path="/meus-produtos" element={<MyAdsPage/>}/>

        </Routes>
      </BrowserRouter>
    </CONTEXT.Provider>
  )
}

export default App
