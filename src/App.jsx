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
const [sector2id, setSector2id]=useState(undefined);
const [sector1id, setSector1id]=useState(undefined);
const [categoryId, setCategoryId] = useState(undefined);
const [formProduct, setFormProduct] = useState({
  name:"",
  description:"",
  value:"",
  sector2: "",
  sector1: "",
  category: ""
})


  return (
    <CONTEXT.Provider value={{
                              sector2id, setSector2id, 
                              sector1id, setSector1id,
                              categoryId, setCategoryId,
                              formProduct, setFormProduct
                          }}>
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
