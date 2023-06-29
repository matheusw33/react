import styled from "styled-components";
import { Livros } from "./dadosLancamentos";
import { Titulo } from "../Titulo";
import CardRecomenta from '../cardRecomenda';
import capaAngular from  '../../img/livro2.png';

const SecaoLancamentos = styled.section`
    display:flex;
    align-items: center;
    flex-direction: column;
    background-color: #F9F5F6;
    padding: 0;
`
const ListaLivros = styled.ul`
    display:flex;
    width:100%;
    margin:0;
    justify-content: center;
    text-align: center;
    padding: 2em 0;
    flex-wrap: wrap;
    gap: 1em;
    `
const ItemLivros = styled.li`
    background-color: #FFF;
    border-radius: 5px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    p{
        font-weight: 700;
        letter-spacing: 1px;
    }
`

function Lancamentos(){
    return(
        <SecaoLancamentos>
            <Titulo
            cor="#f6af25"
            tamanhoFonte="2em"
            padding="1em"
            >   Lançamentos
            </Titulo>
            <ListaLivros>
                {Livros.map( livro => (
                    <ItemLivros>
                        <img
                            src={livro.imagem}
                        />
                        <p>{livro.nome}</p>
                    </ItemLivros>
                ))}
            </ListaLivros>
            <CardRecomenta
                titulo="Achamos que você pode gostar..."
                subtitulo="Angular 11"
                descricao="Criando uma aplicação do Zero"
                img={capaAngular} />
        </SecaoLancamentos>
    )
}

export default Lancamentos;