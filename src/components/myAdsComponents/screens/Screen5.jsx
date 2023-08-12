import { styled } from "styled-components";

export function Screen5(props) {
    const { nextScreen , arrPhotos, setArrPhotos, updateUrls, finalize} = props;


    const toCancel = () => {
        nextScreen(undefined);
    }
    return (
        <CsScreen5>
            <div className="main">


                <input 
                    type="url" id="1"
                    placeholder="Imagem do produto (opcional)" 
                    onChange={(e)=>updateUrls(e, arrPhotos, setArrPhotos)}
                    value={arrPhotos[1]}
                />
                <input 
                    type="url" id="2"
                    placeholder="Imagem do produto (opcional)" 
                    onChange={(e)=>updateUrls(e, arrPhotos, setArrPhotos)}
                    value={arrPhotos[2]}
                />
                <input 
                    type="url" id="3"
                    placeholder="Imagem do produto (opcional)" 
                    onChange={(e)=>updateUrls(e, arrPhotos, setArrPhotos)}
                    value={arrPhotos[3]}
                />
                <input 
                    type="url" id="4"
                    placeholder="Imagem do produto (opcional)" 
                    onChange={(e)=>updateUrls(e, arrPhotos, setArrPhotos)}
                    value={arrPhotos[4]}
                />

                <div className="containerControl">
                    <div className="back control" onClick={() => nextScreen('screen4')}>VOLTAR</div>
                    <div className="cancel control" onClick={toCancel}>CANCELAR</div>
                    <div className="next control" onClick={finalize}>AVANÇAR</div>
                </div>
            </div>
        </CsScreen5>
    );
}

const CsScreen5 = styled.div`
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