import { useNavigate } from "react-router";
import { styled } from "styled-components";
import { Modify } from "../myAdsComponents/modify/Modify";
import { useLocation } from "react-router-dom";


export default function Product( props ) {
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const {name, photo, value, id, category} =props.prod;
    const showProduct = ()=>{
        navigate(`/${category}/${id}`);
    }

    return (
   
        <CsProduct onClick={showProduct} pathname={pathname}>
            <div className="img"><img src={photo}/></div>
            
            <h2>{name}</h2>
            <div className="valuesProduct"> R${(value/100).toFixed(2)}</div>
            {pathname === '/meus-produtos' && <Modify id ={id}/>}
        </CsProduct>
        
        
    );
}



const CsProduct = styled.div`
      position: relative;
      width: 20%;
      height: ${ p=> p.pathname ==='/meus-produtos' ? '40%' : '50%'};
      margin-left: 4%;
      margin-bottom:4%;
      cursor: pointer;


    padding: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    border: 3px solid #CD7F32;
    border-radius: 5px;

    .img{
        img{
            width:100%;
            height:100%;
        }
        border: 1px solid;
        width: 85%;
        height:60%;
        border-radius: 12px;
        transition: transform 0.3s;
        &:hover {
            transform: scale(1.05);
        }
    }
    h2{
        overflow-y: hidden;
        max-height: 100px;
        cursor: pointer;
    }
    .valuesProduct{
        margin-top: 3px; 
        cursor: pointer;

    }
    .addCard{
        width: 100%;
        height: 35px;
        margin-top: 3px;
    }
    .select {
        background-color: green;
    }
    button{
        cursor: pointer;
        background-color: #73384E;
        color: white;
        border-radius: 5px;
        border: none;
        transition: transform 0.3s;
        &:hover {
            transform: scale(1.1);
        }
    }
`;