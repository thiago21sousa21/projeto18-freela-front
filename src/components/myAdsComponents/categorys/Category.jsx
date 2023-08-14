import { useContext } from "react";
import { styled } from "styled-components";
import CONTEXT from "../../../context/context";

export function Category(props){
    const { name, id, selectedId, onSelect } = props;
    const{setCategoryId, formProduct} = useContext(CONTEXT);

    const handleSelect = () => {
        formProduct.category = id;
        setCategoryId(id);
        onSelect(id);
    };

    return(
        <CsCategory onClick={handleSelect} selected={id === selectedId}>
            {name}
        </CsCategory>
    );
}

const CsCategory = styled.div`
border: ${props => (props.selected ? "5px" : "1px")} solid;
height: 13%;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`;