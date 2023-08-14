import { styled } from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { local } from "../utils/functions";
import { useNavigate, useParams } from "react-router-dom";
import Product from "../components/homeComponent/Product";



export default function SectorPage(props) {
  const [allProducts, setAllProducts] = useState(undefined);
  const navigate = useNavigate();
  const {sector} = useParams();

  useEffect(() => {
    if (!local.token) { return navigate('/'); }
    axios.get(`${import.meta.env.VITE_API_URL}/${sector}`, local.config)
      .then((res) => {
        console.log(res)
        setAllProducts(res.data);
      })
      .catch((err) => {
        console.log(err.message)
      })

  }, [sector]);
  return (
    <CsSectorPage>

      <main>
        {typeof (allProducts) != 'object' ? 'CARREGANDO...' : allProducts.map((prod, index) => <Product prod={prod} key={index} />)}
      </main>
    </CsSectorPage>
  );

}

const CsSectorPage = styled.div`
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
    //border: 1px solid red;
    margin-top:2vh;
    display: flex;
    //justify-content: space-between;
    flex-wrap: wrap;
    overflow-y: auto; 
   

    .teste{
      

    }
  }
`;
