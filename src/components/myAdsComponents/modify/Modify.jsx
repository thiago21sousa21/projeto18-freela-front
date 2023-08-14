import axios from "axios";
import { styled } from "styled-components";
import { local } from "../../../utils/functions";

export function Modify (props){
    const {id} = props;
    const childClick = (e)=>{
        e.stopPropagation();
        axios.post(`${import.meta.env.VITE_API_URL}/deleteProduct`,{id:id} , local.config)
            .then(res=>{
                console.log(res);
                location.reload();
            })
            .catch(err=>console.log(err))
    }
    return(
        <CsModify onClick={childClick}>
            DELETE
        </CsModify>
    );
}


const CsModify = styled.div`
position: absolute;
border: 3px solid #CD7F32;
border-radius: 5px;
width: 103%;
height: 27%;
bottom: -27%;
`;