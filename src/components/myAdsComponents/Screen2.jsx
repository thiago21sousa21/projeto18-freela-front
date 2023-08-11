import axios from "axios";
import { useEffect } from "react";
import { styled } from "styled-components";
import { local } from "../../utils/functions";


export function Screen2 (props){
    const {nextScreen} = props;

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/chooseCategory`, local.config)
            .then(res =>{
                console.log(res.data);
            }).catch(err=>console.log(err));
    },[]);

    return(
        <CsScreen2>
            <div className="main">

               
                <div className="containerControl">
                    <div className="back control">VOLTAR</div>
                    <div className="cancel control" onClick={()=>nextScreen(undefined)}>CANCELAR</div>
                    <div className="next control" onClick={()=>nextScreen(undefined)}>AVANÇAR</div>
                </div>
            </div>
        </CsScreen2>
    );
}

const CsScreen2 = styled.div`
width:100vw;
height: 100vh;
position:fixed;
left:0;
top:0;
border: 3px solid pink;

display: flex;
justify-content: center;
align-items: center;
background-color: white;

.main{
    width: 60vw;
    height: 80vh;
    border: 1px solid;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4%;
    position: relative;
    padding-bottom: 7%;

    /* .icon{
            position: absolute;
            right: 0;
            top:0;
            font-size: 30px;
            color: red;
            cursor: pointer;
        } */

    input{
        height: 13%;
        text-align: center;
    }

    .containerControl{
        position: absolute;
        bottom: 0;
        height:15%;
        width: 100%;
        border: 1px solid;
        padding: 2vh;

        display: flex;
        align-items: center;
        justify-content: space-between;

        

        .control{
            cursor: pointer;
        }
    }
}
`;