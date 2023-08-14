import { useContext } from "react";
import { styled } from "styled-components";
import CONTEXT from "../../../context/context";

export function Sector1(props){
    const { name, id, selectedId, onSelect } = props;
    const{setCategoryId, formProduct} = useContext(CONTEXT);

    const handleSelect = () => {
        formProduct.sector1 = id;
        setCategoryId(id);
        onSelect(id);
    };

    return(
        <CsSector1 onClick={handleSelect} selected={id === selectedId}>
            {name}
        </CsSector1>
    );
}

const CsSector1 = styled.div`
border: ${props => (props.selected ? "5px" : "1px")} solid;
height: 13%;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`;