import { styled } from "styled-components";
import { updateForm } from "../../../utils/functions";
import { useContext } from "react";
import CONTEXT from "../../../context/context";

export function Screen1(props) {
    const { nextScreen, updateUrls, arrPhotos, setArrPhotos } = props;
    const { formProduct, setFormProduct } = useContext(CONTEXT);

    const toCancel = () => {
        nextScreen(undefined);
    }
    return (
        <CsScreen1>
            <div className="main">

                <input
                    type="text" id="name" placeholder="Nome do produto"
                    onChange={(e) => updateForm(e, formProduct, setFormProduct)}
                    value={formProduct['name']}
                />
                <input
                    type="text" className="description" id="description"
                    placeholder="Descrição (opcional)"
                    onChange={(e) => updateForm(e, formProduct, setFormProduct)}
                    value={formProduct['description']}
                />
                <input
                    type="number" id="value" placeholder="Valor"
                    onChange={(e) => updateForm(e, formProduct, setFormProduct)}
                    value={formProduct['value']}
                />
                <input
                    type="url" id="0" placeholder="Imagem pricipal (obrigatório)"
                    onChange={(e) => updateUrls(e, arrPhotos, setArrPhotos)}
                    value={arrPhotos[0]}
                />

                <div className="containerControl">
                    <div className="cancel control" onClick={toCancel}>CANCELAR</div>
                    <div className="next control" onClick={() => nextScreen('screen2')}>AVANÇAR</div>
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
    background-color: white;

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