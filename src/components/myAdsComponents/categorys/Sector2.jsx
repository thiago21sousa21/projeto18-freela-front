import { useContext, useState } from "react";
import { styled } from "styled-components";
import CONTEXT from "../../../context/context";
export function Sector2(props){
    const { name, id, selectedId, onSelect } = props;
    const{setSector2id, formProduct} = useContext(CONTEXT);
    
    const handleSelect = () => {
        formProduct.sector2 = id;
        setSector2id(id);
        onSelect(id);
    };

    return(
        <CsSector2 onClick={handleSelect} selected={id === selectedId}>
            {name}
        </CsSector2>
    );
}

const CsSector2 = styled.div`
border: ${props => (props.selected ? "5px" : "1px")} solid;
height: 13%;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`;