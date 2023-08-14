import { styled } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import renovaJa from './../../assets/renovaJa.jpeg';
import { HeaderCategory } from "./HeaderCategory";


export default function Header() {
    const{pathname} = useLocation();
    const navigate = useNavigate();
    const [headerOptions, setHeaderOptions ] = useState(undefined);
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/headerOptions`)
            .then(res =>{
                // console.log(res);
                setHeaderOptions(res.data);
            }).catch(err=>console.log(err));
    },[]);
    if(!headerOptions)return ('...');
    //console.log(headerOptions);
    
    return (
        <CsHeader pathname={pathname}>
            <div className="containerLogoIteraction">
                <div className="logo"  onClick={()=>navigate('/home')}>
                    <img src={renovaJa}/>
                    <><h2> RenovaJa</h2></>
                </div>
                <div className="interaction">
                    <div className="carrinho"  onClick={()=>{navigate('/meus-produtos'); }}>
                    <ion-icon name="cart-outline"></ion-icon>
                        <p>MEUS DESAPEGOS</p>
                    </div>
                    <div className="signInUp"  onClick={()=>navigate('/')}>LOGIN / CADASTRO</div>
                </div>
            </div>
            <div className="sectors">
                {headerOptions.map(category => (<HeaderCategory key={category.id} category={category} />
                    // <div key={category.id} className="molde">
                    //     <p onClick={()=>{navigate(`/${category.name}`);}}>{category.name}</p>
                    // </div>
                ))}                
            </div>

        </CsHeader>
    );
}
{/* <>
<p onClick={()=>navigate('/home')}>TODOS</p>
<p onClick={()=>{navigate('/eletroeletronicos ');}}>Eletroeletronicos</p>
<p onClick={()=>{navigate('/para-sua-casa');}}>Para sua casa</p>
<p onClick={()=>{navigate('/roupas-acessorios');}}>Roupas & acessórios</p>
<p onClick={()=>{navigate('/calcados');}}>Calçados</p>
<p onClick={()=>{navigate('/automoveis');}}>Automoveis</p>
</> */}
const CsHeader = styled.div`
    width: 100vw;
    //border: 1px solid green; 
    height: 15vh;
    background-color: #fff;
    display: ${p=> p.pathname ==='/' || p.pathname ==='/cadastro'? 'none':'flex'};
    flex-direction: column;
    align-items:center;
    /* position: fixed;
    top: 0;
    left: 0; */
    z-index: 100;
    box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.3);
    

    .containerLogoIteraction{
        //margin: 0 5%;
        width:80%;
        display: flex;
        height: 70%;
        //flex-direction: column;
        justify-content: space-between;
        align-items: center;
        //border: 1px solid green; 


        .logo{
            display:flex;
            align-items:center;
            height: 80%;
            width: 20%;
            font-size: 25px;
            //border: 1px solid green; 
            cursor: pointer;

            img{
                width: 100%;
                height: 100%;
                

            }
        }
        .interaction{
            height: 80%;
            width: 30%;
            //border: 1px solid;

            display: flex;
            justify-content: space-between;
            align-items: center;



            .carrinho{
                height: 80%;
                width: 50%;
                display: flex;
                align-items: center;
                background-color: #0D0D0D;
                border: 1px solid;
                //width: auto;
                border-radius: 12px;
                padding: 0 10px;
                cursor: pointer;
                color: white;
                ion-icon{
                    height: 40px;
                    width: 50px;
                   
                }
            }

            .signInUp{
                height: 80%;
                width: 50%;
                border: 1px solid  #10af1e;;                
                display: flex;
                align-items: center;
                padding: 0 10px;
                border-radius: 12px;
                color: #CD7F32;
                cursor: pointer;
            }
        }

    }

    
    .sectors{
        padding: 0 10%;
        height: 30%;
        width: 100%;
        font-size: 10px;
        background-color: #585928;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 20px;

        .molde{
            height: 80%;
            //width: 10%;
            //border: 1px solid;
            background-color: #fff;
            border-radius: 12px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 10px;
            cursor: pointer;
            color: #CD7F32;

        }
    }
   
`;