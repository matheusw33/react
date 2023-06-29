import styled from "styled-components";
import { Titulo } from "../Titulo";

const SecaoRecomenta = styled.section`
    display:flex;
    justify-content: center;
    align-itens: center;
    max-width: 50em;
    margin: 10px auto;
    background-color: #FFF;
    padding: 1em;
    border-radius: 10px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
    gap: 1em;
    flex-wrap: wrap;

`
const Direita = styled.div`
    display: flex;
    flex-direction: column;
    gap:.5em;
`

const Botao = styled.button`
    background-color: #f6af25;
    color: #FFF;
    padding: 5px 10px;
    border:1px solid #DCDCDC;
    cursor:pointer;
    `
function CardRecomenta({titulo, subtitulo, descricao, img}){
    return(
        <SecaoRecomenta>
            <div>
                <Titulo 
                    alinhamento="left"
                    cor="#f6af25"
                >   {titulo}
                </Titulo>
                <h4>{subtitulo}</h4>
                <p>{descricao}</p>
            </div>
            <Direita>
                <img src={img}/>
                <Botao>Saiba Mais</Botao>
            </Direita>                
        </SecaoRecomenta>
    )
};

export default CardRecomenta;