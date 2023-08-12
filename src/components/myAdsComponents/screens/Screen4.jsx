import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import { Sector1 } from "../categorys/Sector1";
import CONTEXT from "../../../context/context";
import { Category } from "../categorys/Category";


export function Screen4 (props){
    const {nextScreen, category, setCategory} = props;
    const {categoryId} = useContext(CONTEXT);
    const [selectedSector, setSelectedSector] = useState(null);
    const handleSectorSelect = (sectorId) => {
        setSelectedSector(sectorId);
    };

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/category/${categoryId}`)
            .then(res =>{
                setCategory(res.data);
            }).catch(err=>console.log(err));
    },[]);
    return(
        <CsScreen4>
            <div className="main">
                {category != undefined ? (
                    category.map( sector =>{
                        return<Category 
                                    key={sector.id} 
                                    name={sector.name} 
                                    id={sector.id}
                                    selectedId={selectedSector}
                                    onSelect={handleSectorSelect}
                                />
                })): 'Não disponivel...'}
               
                <div className="containerControl">
                    <div className="back control" onClick={()=>nextScreen('screen3')}>VOLTAR</div>
                    <div className="cancel control" onClick={()=>nextScreen(undefined)}>CANCELAR</div>
                    <div className="next control" onClick={()=>nextScreen('screen5')}>AVANÇAR</div>
                </div>
            </div>
        </CsScreen4>
    );
}

const CsScreen4 = styled.div`
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
    overflow-y: auto;

    

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