import styled from 'styled-components';

const OpcoesLista = styled.ul`
    cursor: pointer;
    display: flex;
    gap: 2em;
    text-transform: uppercase;
    justify-content: center;
    align-items: center;
    height: 100%;
`
const OpcoesItem = styled.li``

const opcoes = ['Categorias','Minha Estante','Favoritos']

function Opcoes(){
    return(
        <OpcoesLista>
            {opcoes.map( (opcao) => (
                <OpcoesItem>{opcao}</OpcoesItem>
            ))}
        </OpcoesLista>
    )
};

export default Opcoes;