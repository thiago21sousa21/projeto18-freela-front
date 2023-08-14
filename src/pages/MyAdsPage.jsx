import { styled } from "styled-components";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { local } from "../utils/functions";
import { useNavigate } from "react-router-dom";
import Product from "../components/homeComponent/Product";
import { Screen2 } from "../components/myAdsComponents/screens/Screen2";
import { Screen3 } from "../components/myAdsComponents/screens/Screen3";
import { Screen1 } from "../components/myAdsComponents/screens/Screen1";
import { Screen4 } from "../components/myAdsComponents/screens/Screen4";
import { Screen5 } from "../components/myAdsComponents/screens/Screen5";
import CONTEXT from "../context/context";
import { photoProductSchema, productSchema } from "../utils/schemas/productSchemas";

export default function MyAdsPage(props) {
    const [allProducts, setAllProducts] = useState(undefined);
    const navigate = useNavigate();
    const [currentScreen, setCurrentScreen] = useState(undefined);
    const [sector2, setSector2] = useState(undefined);
    const [sector1, setSector1] = useState(undefined);
    const [category, setCategory] = useState(undefined);
    const [arrPhotos, setArrPhotos] = useState(['','','','','']);
    const {formProduct} =useContext(CONTEXT);

    useEffect(() => {
        if (!local.token) { return navigate('/'); }
        axios.get(`${import.meta.env.VITE_API_URL}/myAds`, local.config)
            .then((res) => {
                setAllProducts(res.data);
            })
            .catch((err) => {
                console.log(err.message)
            })

    }, []);

    const nextScreen = (screen)=>{
        setCurrentScreen(screen);
    }
    const updateUrls = (e, array, setArray)=>{
        const{id, value} = e.target;
        const newArrPhotos = [...arrPhotos];
        newArrPhotos[id]= value;
        setArrPhotos(newArrPhotos);
        //console.log(newArrPhotos);
    }

    const  finalize = ()=>{
        const body={
            form: formProduct,
            photos: arrPhotos
        }
    const validateArrPhotos = photoProductSchema.validate(arrPhotos);
    const validateForm = productSchema.validate(formProduct);
    console.log(body)
 
    if(validateArrPhotos.error){
        const errors = validateArrPhotos.error.details.map(detail => detail.message);
        return alert(errors);
    }
    if(validateForm.error){
        const errors = validateForm.error.details.map(detail => detail.message);
        return alert(errors);
    }


        axios.post(`${import.meta.env.VITE_API_URL}/insertNewProduct`,body ,local.config)
            .then(res=>{
                console.log(res)
            }).catch(err=>console.log(err))
        
        nextScreen(undefined);
        location.reload();
    }

    return (
        <CsMyAdsPage>
            <main>
                <button onClick={() => setCurrentScreen('screen1')}>NOVO</button>
                {typeof (allProducts) != 'object' ? 'CARREGANDO...' : allProducts.map((prod, index) => <Product prod={prod} key={index} />)}
                <form >
                    {currentScreen === 'screen1' && <Screen1 
                                                        nextScreen={nextScreen} 
                                                        updateUrls={updateUrls}
                                                        arrPhotos={arrPhotos}
                                                        setArrPhotos={setArrPhotos}
                                                    />}
                    {currentScreen === 'screen2' && <Screen2 
                                                        nextScreen={nextScreen}
                                                        sector2={sector2} 
                                                        setSector2={setSector2}
                                                    />}
                    {currentScreen === 'screen3' && <Screen3 
                                                        nextScreen={nextScreen}
                                                        sector1={sector1} 
                                                        setSector1={setSector1}
                                                    />}
                    {currentScreen === 'screen4' && <Screen4 
                                                        nextScreen={nextScreen}
                                                        category={category} 
                                                        setCategory={setCategory}
                                                    />}
                    {currentScreen === 'screen5' && <Screen5 
                                                        nextScreen={nextScreen}
                                                        arrPhotos={arrPhotos}
                                                        setArrPhotos={setArrPhotos}
                                                        updateUrls={updateUrls}
                                                        finalize={finalize}
                                                    />}
                </form>


            </main>
        </CsMyAdsPage>
    );

}

const CsMyAdsPage = styled.div`
  //margin-top: 100px;
  //border: 3px solid;
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

    button{
        width: 20%;
        height: 50%;
        margin-left: 4%;
        margin-bottom:4%;
        cursor: pointer;
    }
  }
`;