import Perfil from '../../img/perfil.svg';
import Sacola from '../../img/sacola.svg';
import styled from 'styled-components';

const ListaIcones = styled.ul`
        display: flex;
        gap: 1.5em;
        align-items: center;
        justify-content: center;
        cursor: pointer;
`
const Icone = styled.li`
    width: 25px;
`

const icones = [ Perfil, Sacola];

function Icones(){
    return(
        <ListaIcones>
            {icones.map( (icone) => (
                <Icone><img src={icone}></img></Icone>
            ))}
        </ListaIcones>
    )
}

export default Icones;