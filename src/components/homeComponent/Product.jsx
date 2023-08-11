import { useNavigate } from "react-router";
import { styled } from "styled-components";

export default function Product( props ) {
    const navigate = useNavigate();
    const {name, mainPhoto, value, id, category} =props.prod;
    const showProduct = ()=>{
        navigate(`/${category}/${id}`);
    }


    return (
        <CsProduct onClick={showProduct}>
            <img src={mainPhoto}/>
            <h2>{name}</h2>
            <div className="valuesProduct"> R$ {value.toFixed(2)}</div>
        </CsProduct>
    );
}

const CsProduct = styled.div`
      width: 20%;
      height: 50%;
      margin-left: 4%;
      margin-bottom:4%;

    padding: 10px;

    display: flex;
    flex-direction: column;
    border: 3px solid #73384E;
    border-radius: 5px;

    img{
        border: 1px solid;
        width: 100%;
        cursor: pointer;
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