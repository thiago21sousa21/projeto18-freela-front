import { styled } from "styled-components";
import CONTEXT from "../context/context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


export default function Footer() {

    const {total, setCheckout, user} = useContext(CONTEXT);
    const navigate = useNavigate();
    const lsToken = localStorage.getItem("token"); 
    console.log(user)
    function checkLogin() {
        if (!user) {
            setCheckout(true);
            navigate("/sign-in");
        } else {
            navigate("/confirmar-informacao");
        }
    }

    return (
        <FooterContainer>
            <p>Total R${total.toLocaleString("pt-BR")}</p>
            <button onClick={checkLogin}><p>Continuar</p></button>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    width: 100%;
    height: 100px;
    background-color: #73384E;
    //border: 1px solid #000000;
    box-shadow: 2px -4px 4px 0px rgba(0, 0, 0, 0.3);

    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 40px;
    position: fixed;
    left: 0;
    bottom: 0;
    p {
        font-size: 25px;
        font-weight: 700;
        color: #FFFFFF;
    }
    button {
        width: 200px;
        height: 80px;
        background-color: #10af1e ;
        border: 3px solid white;
        border-radius: 10px;
        margin-left: 40px;
        cursor: pointer;
        transition: transform 0.3s;
        &:hover {
            transform: scale(1.05);
        }
        p {
            font-size: 30px;
            font-weight: 400;
            color: white;
        }
    }
`

