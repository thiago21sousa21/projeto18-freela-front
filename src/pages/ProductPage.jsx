import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { local } from "../utils/functions";
import { SmallPhoto } from "../components/productPageComponent/SmallPhoto";


export default function ProductPage(props) {
    const { category, id } = useParams();
    const [currentProd, setCurrenteProd] = useState('carregando...');
    const [currentImg, setCurrentImg] = useState(undefined);


    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/${category}/${id}`, local.config)
            .then((res) => {
                console.log(res.data)
                setCurrenteProd(res.data);
                setCurrentImg(res.data.photos[0])

            })
            .catch(erro => console.log(erro))

    }, []);

    if(currentProd === 'carregando...')return currentProd;
    console.log(currentProd, 'ultimo')
    const {value, name, product, description, email, phoneNumber, photos} = currentProd;
    return (
        <CsProductPage>

            <div className="container">

                <main>
                    <div className="imagesProduct">
                        <div className="containerSmallImgs">                            
                            {photos.map((photo, idx)=><SmallPhoto 
                                                            photo={photo}
                                                            key={idx} 
                                                            idx={idx}
                                                            setCurrentImg={setCurrentImg} 
                                                            currentImg={currentImg}
                                                        />
                                        )
                            }
                        </div>
                        <img 
                            className="bigImg" 
                            src={currentImg} 
                        />
                    </div>
                    <div className="sellerData">
                        <h2>{product}</h2>                        
                        <div className="value">Valor: R${value}</div>
                        <div className="contact">
                            <p>INFORMAÇÕES DE CONTATO</p>
                            <p>Procurar por: {name}</p>
                            <p>email: {email}</p>
                            <p>telefone: {phoneNumber}</p>
                        </div>
                    </div>
                </main>
                {description &&(
                    <div className="description">
                    <h1>DESCRIÇÃO</h1>
                    <div className="descriptionText">{description}</div>
                </div>

                ) }
                
            </div>


        </CsProductPage>
    );
}

const CsProductPage = styled.div`
    width: 100%;
    height: 85vh;
    
    *{border: 1px solid;}
    display:flex;
    flex-direction: column;
    align-items: center;
    //border: 4px solid red;
    .container{
        overflow-y: scroll;
        border: 1px solid;
        width: 100%;
        padding: 2vh 10vw 0;
        //border: 4px solid red;
    }
    
    main{
        height: 80vh;
        width: 100%;
        //border: 1px solid;
        display: flex;

        .imagesProduct{
            width: 60%;
            height: 100%;
            //border: 1px solid;
            display: flex;

            .containerSmallImgs{
                height: 100%;
                width: 20%;
                
            }
            .bigImg{
                //border: 1px solid;
                height: 100%;
                width: 80%;
                border-radius: 12px;
            }
        }
        .sellerData{
            width: 40%;
            height: 100%;
            //border: 1px solid;
            padding: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 5%;

            h2{
                font-size: 6vh;
            }            
            .value{
                font-size: 4vh;
            }
            .contact{
                font-size: 4vh;
            }
        }
    }

    .description{
        flex-direction: column;
        text-align: center;
        //border: 1px solid pink;
        width: 80%;

        h1{
            font-size: 50px;
        }
        .descriptionText{
            border: 1px solid;
        }

    }
    
`;