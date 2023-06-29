import Logo from '../logo';
import Opcoes from '../Opcoes';
import Icones from '../icones';
import styled from 'styled-components';

const Cabecalho = styled.header`
    display: flex;
    background-color: #fff;
    justify-content: space-around;
    align-items: center;
`
function Header(){
    return(
        <Cabecalho>
            <Logo/>
            <Opcoes/>
            <Icones/>
        </Cabecalho>
    )
};

export default Header;