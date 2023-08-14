import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export function HeaderCategory(props){
    const navigate = useNavigate();
    const {category} = props;
    return(
        <CsHeaderCategory>
            <p onClick={()=>{navigate(`/${category.name}`);}}>{category.name}</p>
        </CsHeaderCategory>
    );
}

const CsHeaderCategory = styled.div`
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

`;