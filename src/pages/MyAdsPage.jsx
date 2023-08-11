import { styled } from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { local } from "../utils/functions";
import { useNavigate } from "react-router-dom";
import Product from "../components/homeComponent/Product";
import { Screen1 } from "../components/myAdsComponents/Screen1";
import { Screen2 } from "../components/myAdsComponents/Screen2";

export default function MyAdsPage(props) {
    const [allProducts, setAllProducts] = useState(undefined);
    const navigate = useNavigate();
    const [currentScreen, setCurrentScreen] = useState(undefined);

    useEffect(() => {
        if (!local.token) { return navigate('/'); }
        axios.get(`${import.meta.env.VITE_API_URL}/myAds`, local.config)
            .then((res) => {
                console.log(res)
                setAllProducts(res.data);
            })
            .catch((err) => {
                console.log(err.message)
            })

    }, []);

    const nextScreen = (screen)=>{
        setCurrentScreen(screen);
    }

    return (
        <CsMyAdsPage>
            <main>
                <button onClick={() => setCurrentScreen('screen1')}>NOVO</button>
                {typeof (allProducts) != 'object' ? 'CARREGANDO...' : allProducts.map((prod, index) => <Product prod={prod} key={index} />)}
                <form>
                    {currentScreen === 'screen1' && <Screen1 nextScreen={nextScreen} />}
                    {currentScreen === 'screen2' && <Screen2 nextScreen={nextScreen} />}
                </form>


            </main>
        </CsMyAdsPage>
    );

}

const CsMyAdsPage = styled.div`
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

    button{
        width: 20%;
        height: 50%;
        margin-left: 4%;
        margin-bottom:4%;
    }
  }
`;