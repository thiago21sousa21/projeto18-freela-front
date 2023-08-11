import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { local } from "../utils/functions";

export default function ProductPage(props) {
    const { category, id } = useParams();
    const [currentProd, setCurrenteProd] = useState('carregando...');

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/${category}/${id}`, local.config)
            .then((res) => {
                console.log(res.data)
                setCurrenteProd(res.data);
            })
            .catch(erro => console.log(erro))

    }, []);

    if(currentProd === 'carregando...')return currentProd;
    console.log(currentProd, 'ultimo')
    const {value, name, mainPhoto, description} = currentProd;
    return (
        <CsProductPage>

            <div className="container">

                <main>
                    <div className="imagesProduct">
                        <div className="containerSmallImgs">
                            <img />
                        </div>
                        <img className="bigImg" />
                    </div>
                    <div className="sellerData">
                        <h2>{name}</h2>                        
                        <div className="value">Valor: R${value}</div>
                        <div className="contact">
                            <p>INFORMAÇÕES DE CONTATO</p>
                            <p>Procurar por: </p>
                            <p>email: </p>
                            <p>telefone: </p>
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
                img{
                    height: 20%;
                    border: 4px solid #73384E;               
                    border-radius: 50%;
                    width: 100%;
                    cursor: pointer;
                    &:hover{
                        transform: scale(1.05);
  
                    }
                }
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