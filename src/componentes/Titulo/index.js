import styled from "styled-components";

export const Titulo = styled.h2`
    font-size: ${props => props.tamanhoFonte || '25px'};
    background-color: #FFF;
    width:100%;
    margin:0;
    padding: ${props => props.padding || 0};
    text-transform: uppercase;
    color: ${props => props.cor || '#000'};
    text-align: ${props => props.alinhamento || 'center'};
    letter-spacing: 3px;
`