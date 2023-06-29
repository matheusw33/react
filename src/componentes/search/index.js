import styled from "styled-components";
import Input from '../Input';
import { useState } from "react";
import { Livros } from "./dadospesquisa";

const SecaoPesquisar = styled.section`
    min-height: 400px;
    text-align: center;
    padding: 80px 0;
    color: #FFF;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
    background-image: linear-gradient(90deg, #1F6E8C, #0E2954 );
`
const Titulo = styled.h2`
    font-size: 3em;
    margin: 0;
`
const Subtitulo = styled.h3`
    font-size: 1.3em;
    margin: 0 ;
`
const Resultado = styled.div`
    display:flex;
    align-items: center;
    border: 1px solid #FFF;
    padding: 15px;
    gap: 1em;
    height: 90px;
    width: 300px;
    justify-content: space-between;
`
const CapaLivro = styled.img`
    width:85px;
`

function Pesquisar(){

    const[ livroPesquisado, setLivroPesquisado] = useState([]);

    return(
        <SecaoPesquisar>
            <Titulo>Ja sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro na nossa estante.</Subtitulo>
            <Input
                placeholder='Pesquise um livro aqui...'
                onBlur={ evento => {
                    const nomePesquisado = evento.target.value;
                    const resultadoPesquisa = Livros.filter( livro => livro.nome.includes(nomePesquisado));
                    setLivroPesquisado(resultadoPesquisa);
                }} 
            />
            
            {livroPesquisado.map( livro => (
                <Resultado>
                    <p>{livro.nome}</p>
                    <CapaLivro 
                     src={livro.imagem}
                     />
                </Resultado>
            ))}
        </SecaoPesquisar>

    )
}

export default Pesquisar;