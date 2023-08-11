import { styled } from "styled-components";

export function Screen1 (props){
    const {nextScreen} = props;

    const toCancel = ()=>{
        nextScreen(undefined);
    }
    return(
        <CsScreen1>
            <div className="main">

                <input type="text"  id="name" 
                placeholder="Nome do produto"/>
                <input type="text" className="description" id="description" 
                placeholder="Descrição (opcional)"/>
                <input type="number" id="value" 
                placeholder="Valor"/>
                <input type="url" id="mainPhoto" 
                placeholder="Imagem pricipal (obrigatório)"/>
               
                <div className="containerControl">
                    <div className="back control">VOLTAR</div>
                    <div className="cancel control" onClick={toCancel}>CANCELAR</div>
                    <div className="next control" onClick={()=>nextScreen('screen2')}>AVANÇAR</div>
                </div>
            </div>
        </CsScreen1>
    );
}

const CsScreen1 = styled.div`
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