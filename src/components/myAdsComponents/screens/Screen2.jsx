import axios from "axios";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { local } from "../../../utils/functions";
import { Sector2 } from "../categorys/Sector2";


export function Screen2 (props){
    const {nextScreen, sector2, setSector2} = props;
    const [selectedSector, setSelectedSector] = useState(null);
    const handleSectorSelect = (sectorId) => {
        setSelectedSector(sectorId);
    };

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/chooseCategory`)
            .then(res =>{
                setSector2(res.data);
            }).catch(err=>console.log(err));
    },[]);
    return(
        <CsScreen2>
            <div className="main">
                {sector2 != undefined ? (
                    sector2.map( sector =>{
                        return<Sector2 
                                    key={sector.id} name={sector.name} 
                                    id={sector.id}
                                    selectedId={selectedSector}
                                    onSelect={handleSectorSelect}
                                />
                })): 'Não disponivel...'}
               
                <div className="containerControl">
                    <div className="back control" onClick={()=>nextScreen('screen1')}>VOLTAR</div>
                    <div className="cancel control" onClick={()=>nextScreen(undefined)}>CANCELAR</div>
                    {selectedSector && <div className="next control" onClick={()=>nextScreen('screen3')}>AVANÇAR</div>}
                    
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

display: flex;
justify-content: center;
align-items: center;
background-color: rgba(0, 0, 0, 0.3);


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
    background-color: white;

    

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