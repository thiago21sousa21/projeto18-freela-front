import { styled } from "styled-components";
import {useEffect, useState } from "react";
import axios from "axios";
import { local } from "../utils/functions";
import { useNavigate } from "react-router-dom";
import Product from "../components/homeComponent/Product";



export default function HomePage(props) {
  const [allProducts, setAllProducts] = useState(undefined);
  const navigate = useNavigate();

  useEffect(()=>{
   
    axios.get(`${import.meta.env.VITE_API_URL}/home`, local.config)
    .then((res)=>{

      console.log(res)
      setAllProducts(res.data);
      
    })
    .catch((err)=>{
      if(!local.token){return navigate('/');}
      console.log(err.message)
    })

  }, []);
    return(
        <CsHomePage>

            <main>   
                     
                { typeof(allProducts)!='object'? 'CARREGANDO...' :  allProducts.map((prod, index) => <Product prod={prod} key = {index}/>)}               

            </main>
        </CsHomePage>
    );

}

const CsHomePage = styled.div`
  //margin-top: 100px;
  border: 3px solid;
  //background-color: red;
  height: 85vh;
  width: 100wv;
  //internal position
  display: flex;
  flex-direction: column;
  padding:0 10vw;

    *{
        //border: 1px solid;

    }

  main{
    width: 100%;
    height: 100%;
    border: 1px solid red;
    margin-top:2vh;
    display: flex;
    //justify-content: space-between;
    flex-wrap: wrap;
    overflow-y: auto; 
   

    .teste{
      

    }
  }
`;
