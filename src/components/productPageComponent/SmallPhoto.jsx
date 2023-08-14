import { styled } from "styled-components";

export function SmallPhoto(props) {
    const {photo, setCurrentImg, currentImg, idx}=props;
    return (
        <CsSmallPhoto onClick={()=>setCurrentImg(photo)}>
            <img src={photo}/>
        </CsSmallPhoto>);
}

const CsSmallPhoto = styled.div`
    height: 20%;
    border: 4px solid #0d0d0d;               
    border-radius: 50%;
    width: 100%;    
    cursor: pointer;
    overflow: hidden;
    &:hover{
        transform: scale(1.05);
    }
    img{
        width:100%;
        height: 100%;
    }

`;